var data= JSON.parse (localStorage.getItem("purchase"))||[]
console.log('ans:', data);

let mappingData=( data)=>{
    // console.log('data:', data)
    data.forEach(el => {
        var list=document.getElementById("purchased_vouchers");
        var row=document.createElement("div");
        row.setAttribute("class","voucher");
        var img=document.createElement("img");
        img.src=el.image;
        var p=document.createElement("p");
        p.innerText=el.name;
        var p1=document.createElement("p");
        p1.innerText=el.price;
       
        row.append(img,p,p1);
        list.append(row);
        // console.log('el:', el.image)
    });
   
}
mappingData(data)