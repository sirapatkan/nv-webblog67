<template>
  <div>
    <h1>Create Keyboard</h1>
    <form v-on:submit.prevent="createKeyboard">
      <p>
        Keyboard Name:
        <input type="text" v-model="keyboard.keyboard" />
      </p>
      <transition name="fade">
        <div class="thumbnail-pic" v-if="keyboard.thumbnail">
          <img :src="BASE_URL + keyboard.thumbnail" alt="thumbnail" />
        </div>
      </transition>
      <div class="dropbox">
        <input
          type="file"
          multiple
          :name="uploadFieldName"
          :disabled="isSaving"
          @change="filesChange($event.target.name, $event.target.files)"
          accept="image/*"
          class="input-file"
        />
        <p v-if="isInitial">Drag your file(s) here to begin<br />or click to browse</p>
        <p v-if="isSaving">Uploading {{ fileCount }} files...</p>
        <p v-if="isSuccess">Upload Successful.</p>
      </div>
      <div>
        <transition-group tag="ul" class="pictures">
          <li v-for="picture in pictures" v-bind:key="picture.id">
            <img
              style="margin-bottom: 5px"
              :src="BASE_URL + picture.name"
              alt="picture image"
            />
            <br />
            <button v-on:click.prevent="useThumbnail(picture.name)">Thumbnail</button>
            <button v-on:click.prevent="delFile(picture)">Delete</button>
          </li>
        </transition-group>
        <div class="clearfix"></div>
      </div>
      <p><strong>Keyboard Type:</strong></p>
      <vue-ckeditor v-model.lazy="keyboard.keyboardtype" :config="config" />
      <p>Price: <input type="text" v-model="keyboard.price" /></p>
      <p>Status: <input type="text" v-model="keyboard.status" /></p>
      <p><button type="submit">Create Keyboard</button></p>
    </form>
  </div>
</template>

<script>
import KeyboardsService from "@/services/KeyboardsService";
import VueCkeditor from "vue-ckeditor2";
import UploadService from "../../services/UploadService";

const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;

export default {
  data() {
    return {
      BASE_URL: "http://localhost:8081/assets/uploads/",
      error: null,
      uploadError: null,
      currentStatus: STATUS_INITIAL,
      uploadFieldName: "userPhoto",
      uploadedFileNames: [],
      pictures: [],
      pictureIndex: 0,
      keyboard: {
        name: "",       // เปลี่ยนจาก title เป็น name
        thumbnail: null,
        pictures: [],
        type: "",       // เปลี่ยนจาก content เป็น type
        price: "",      // เปลี่ยนจาก category เป็น price
        status: "saved",
      },
      config: {
        toolbar: [
          ["Bold", "Italic", "Underline", "Strike", "Subscript", "Superscript"],
        ],
        height: 300,
      },
    };
  },
  methods: {
    async delFile(picture) {
      let result = confirm("Want to delete?");
      if (result) {
        let dataJSON = { filename: picture.name };
        await UploadService.delete(dataJSON);
        this.pictures = this.pictures.filter(p => p.id !== picture.id);
      }
    },
    async createKeyboard() {
      this.keyboard.pictures = JSON.stringify(this.pictures);
      try {
        await KeyboardsService.post(this.keyboard);
        this.$router.push({ name: "keyboards" });
      } catch (err) {
        console.log(err);
      }
    },
    filesChange(fieldName, fileList) {
      const formData = new FormData();
      if (!fileList.length) return;
      Array.from(fileList).forEach(file => {
        formData.append(fieldName, file, file.name);
        this.uploadedFileNames.push(file.name);
      });
      this.save(formData);
    },
    async save(formData) {
      try {
        this.currentStatus = STATUS_SAVING;
        await UploadService.upload(formData);
        this.currentStatus = STATUS_SUCCESS;
        this.uploadedFileNames.forEach(uploadFilename => {
          if (!this.pictures.some(p => p.name === uploadFilename)) {
            this.pictureIndex++;
            this.pictures.push({
              id: this.pictureIndex,
              name: uploadFilename,
            });
          }
        });
        this.clearUploadResult();
      } catch (error) {
        console.log(error);
        this.currentStatus = STATUS_FAILED;
      }
    },
    clearUploadResult() {
      setTimeout(() => this.reset(), 5000);
    },
    useThumbnail(filename) {
      this.keyboard.thumbnail = filename;
    },
    reset() {
      this.currentStatus = STATUS_INITIAL;
      this.uploadError = null;
      this.uploadedFileNames = [];
      this.keyboard = {
        name: "",        // เปลี่ยนจาก title เป็น name
        thumbnail: null,
        pictures: [],
        type: "",        // เปลี่ยนจาก content เป็น type
        price: "",       // เปลี่ยนจาก category เป็น price
        status: "saved",
      };
      this.pictures = [];
    },
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
  },
  components: {
    VueCkeditor,
  },
  created() {
    this.currentStatus = STATUS_INITIAL;
  },
};
</script>

<style scoped>
.dropbox {
  outline: 2px dashed grey;
  outline-offset: -10px;
  background: lemonchiffon;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px;
  position: relative;
  cursor: pointer;
}
.input-file {
  opacity: 0;
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: khaki;
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
ul.pictures {
  list-style: none;
  padding: 0;
  margin: 0;
  float: left;
  padding-top: 10px;
  padding-bottom: 10px;
}
ul.pictures li {
  float: left;
}
ul.pictures li img {
  max-width: 180px;
  margin-right: 20px;
}
.clearfix {
  clear: both;
}
.thumbnail-pic img {
  width: 200px;
}
</style>
