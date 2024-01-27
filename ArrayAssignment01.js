const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`step 1....Log the First And Last Element on Console`);
console.log(` First Element :${fruits_seasonal[0]}`);
console.log(` Last Element :${fruits_seasonal[fruits_seasonal.length-1]}`);
console.log(`...............................Step 2.......................................`);
console.log(`Add element papaya before element Banana`);
const fruits_seasonal1=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`  Array Elements Before  Adding : `);
for (let index = 0; index < fruits_seasonal1.length; index++) {
    const element = fruits_seasonal1[index];
    console.log(element);   
}
fruits_seasonal1.unshift("papaya");
console.log(`  Array Elements After Adding : `);

for (let index = 0; index < fruits_seasonal1.length; index++) {
    const element = fruits_seasonal1[index];
    console.log(element);
    
}
console.log(`step 3.... Remove Mango From  The Array.`);
const fruits_seasonal2=["Banana","Orange","Apple","Mango","Water Melon"];
fruits_seasonal2.splice(3,1);
for (let index = 0; index < fruits_seasonal2.length; index++) {
    const element = fruits_seasonal2[index];
    console.log(element);
}
console.log(`step 4...Add Element or insert element pineapple at the last position`);
const fruits_seasonal3=["Banana","Orange","Apple","Mango","Water Melon"];
fruits_seasonal3.push("pineapple");
for (let index = 0; index < fruits_seasonal3.length; index++) {
    const element = fruits_seasonal3[index];
    console.log(element);
}
console.log(`step 5.... Insert An element-'Dragon Fruit' before Water Melon `);
const fruits_seasonal4=["Banana","Orange","Apple","Mango","Water Melon"];
fruits_seasonal4.splice(4,0,"Dragon Fruit");
for (let index = 0; index <fruits_seasonal4.length; index++) {
    const element = fruits_seasonal4[index];
    console.log(element);
    
}
console.log(`step 6.... Replace an  Element Orange with Kiwi`);
const fruits_seasonal5=["Banana","Orange","Apple","Mango","Water Melon"];
fruits_seasonal5.splice(1,1,"Kiwi");
for (let index = 0; index < fruits_seasonal5.length; index++) {
    const element = fruits_seasonal5[index];
    console.log(element);
    
}
console.log(`step 7....Log The Element Starting from  index 1 to 4 `);
const fruits_seasonal6=["Banana","Orange","Apple","Mango","Water Melon"];
const result=fruits_seasonal6.slice(1,fruits_seasonal6.length);
console.log(result);
console.log(`step 8...only select last Three element  and log on console use.length property`);
const fruits_seasonal7=["Banana","Orange","Apple","Mango","Water Melon"];
const result1=fruits_seasonal7.slice(2,fruits_seasonal7.length);
console.log(result1);


