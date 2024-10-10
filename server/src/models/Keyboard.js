module.exports = (sequelize, DataTypes) => {
  const Keyboard = sequelize.define('Keyboard', {
      keyboard: DataTypes.STRING,          // เปลี่ยน title เป็น keyboard
      thumbnail: DataTypes.STRING,
      pictures: DataTypes.TEXT,
      keyboardtype: DataTypes.TEXT,        // เปลี่ยน content เป็น keyboardtype
      price: DataTypes.FLOAT,              // เปลี่ยน category เป็น price และกำหนดเป็น FLOAT สำหรับราคาที่มีทศนิยมได้
      status: DataTypes.STRING,
  })
  return Keyboard
}
