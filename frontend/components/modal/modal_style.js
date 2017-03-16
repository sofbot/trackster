export const modalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(000, 000, 000, 0.6)',
    zIndex          : 10,
    display         : 'flex',
    justifyContent  : 'center',
    alignItems      : 'center',
  },

  content : {
    position        : 'relative',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    border          : '1px solid #ccc',
    padding         : 0,
    width           : '545px',
    height          : '500px',
    zIndex          : 11,
    backgroundColor : '#f6f6f6',
    boxShadow       : '0 2px 5px rgba(0,0,0,.4)'
  }
};
