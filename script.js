const CategoryHandle = async () => {
  const response = await fetch(
    ` https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await response.json();
  const dataSet = data.data;
  dataSet.forEach((category) => {
    const tabContainer = document.getElementById("tab-container");
    const div = document.createElement("div");
    div.innerHTML = `
        <a class="tab tab-active-[#0000] bg-[#25252526]  px-5 rounded-[4px]" onclick="loadData('${category.category_id}')">${category.category}</a>
        `;
    tabContainer.appendChild(div);
  });
};

const loadData = async (categoryId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
const data = await response.json();
const dataSet =  data.data;

sortByView(dataSet)
  const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = "";
const videoContainer2 = document.getElementById('video-container2');
videoContainer2.innerHTML = '';
    if(dataSet.length == 0){
      
      const div = document.createElement('div');
      div.innerHTML=`
      <div class="flex flex-col justify-center items-center gap-8">
      <img src="icon.png" alt="" srcset="" class="w-[140px] h-[140px]">
      <h2 class="text-center text-[#171717] text-3xl font-bold">Oops!! Sorry, There is no <br> content here</h2>
      </div>
      
      `;
      videoContainer2.appendChild(div)
    }
else{
  dataSet.forEach((category)=>{
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="flex flex-col gap-5">
              <img src="${category.thumbnail}" alt="" srcset="" class="w-[312px] h-[200px]">
            <div>
                <div class="flex gap-3">
                    <div><img src="${category.authors[0].profile_picture}" alt="" srcset="" class="w-[40px] h-[40px] rounded-[40px]"></div>
                    <div class="flex gap-1 flex-col">
                        <h2 class="text-[#171717] text-base font-bold">${category.title}</h2>
                        <div class="flex">
                        <p class="text-[#171717b3] text-sm font-normal">${category.authors[0].profile_name}</p>
                        
                        </div>
                        
                        <p class="text-[#171717b3] text-sm font-normal">${category.others.views}</p>
                    </div>
                </div>
            </div>  
            </div>
    `;
    videoContainer.appendChild(div)
  })
}
  
};
CategoryHandle();
loadData("1000")

const sortByView = (dataSet) =>{
console.log(dataSet)
}
