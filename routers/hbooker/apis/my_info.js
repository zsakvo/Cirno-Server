const get = require("../mixin/http").getHbooker;

let my_info = async function () {
  if(!allTokens.hbooker){
    return {
      success:false,
      code:200100,
      tip:'尚未登录，正在跳转登录页面……'
    }
  }else{
    let res = await get({
      url: "/reader/get_my_info",
      para: {
        reader_id: allTokens.hbooker.reader_id ,
      },
    });
    return res;
  } 
};

module.exports = my_info;
