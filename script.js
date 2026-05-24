 let HRS=document.getElementById("HRS");
  let MIN=document.getElementById("MIN");
  let SEC=document.getElementById("SEC");

  setInterval(()=>{
      let currenttime = new Date();

  HRS.innerHTML=(currenttime.getHours()<10?"0":"")+currenttime.getHours();
  MIN.innerHTML=(currenttime.getMinutes()<10?"0":"")+currenttime.getMinutes();
  SEC.innerHTML=(currenttime.getSeconds()<10?"0":"")+currenttime.getSeconds();

  } ,1000)
