// First chart js
var ctx= document.getElementById('myChart');
const myChart = new Chart(ctx,{
    type:'bar',
    data:{
        labels :["MAR","MAY","JUNE","JULY","AUGUST","SEPT","OCT"],
        datasets:[
            {
                data:[5000,6000,9000,7000,9000,7000,9000,10000],
                label:"Income",
                backgroundColor:["#836cf9","#836cf9","#836cf9","#836cf9","#836cf9","#836cf9","#836cf9"]
            },
            {
                data:[3000,4000,6000,5000,6000,5000,6000,13000],
                label:"Loss",
                backgroundColor:["#fcae69","#fcae69","#fcae69","#fcae69","#fcae69","#fcae69","#fcae69"]
            }
        ]
    },
    options:{
        maintainAspectRatio:false,
        layout:{
            padding:{
                top:32,
                left:32,
                bottom:32,
                right:32
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Revenue',
                font:{
                    size:20,
                },
                align:"start",
            },
            legend:{
                align:"end",
                position:"top",
                labels:{
                    boxWidth:5,
                    boxHeight:5,
                },
                pointStyle:'circle',
            }
        },
        scales:{
            x:{
                grid:{
                    display:false,
                }
            },
            y:{
                grid:{
                    display:false,
                }
            }
        }
    }
}    
);

// Second bar chart
var ctxTwo= document.getElementById('myChartTwo');
const datapie ={
    labels :["Done","In progress","Canceled"],
    datasets:[
        {
            data:[50,25,25],
            label:"Income",
            backgroundColor:["#6231f8","#f8cf5b","#ff9574"]
        },
    ]
};
const configpie={
    type:'doughnut',
    data:datapie,
    options:{
        maintainAspectRatio:false,
        layout:{
            padding:{
                top:20,
                left:20,
                bottom:20,
                right:20,
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Orders Status',
                font:{
                    size:20,
                },
                align:"start",
                padding:{
                    bottom:50,
                }
            },
            legend:{
                align:"center",
                position:"bottom",
                labels:{
                    boxWidth:5,
                    boxHeight:5,
                },
                pointStyle:'circle',
            }
        },
        scales:{
            x:{
                ticks:{
                    display:false,
                },
                grid:{
                    display:false,
                }
            },
            y:{
                ticks:{
                    display:false,
                },
                grid:{
                    display:false,
                }
            }
        }   
    }
}
const myChartTwo = new Chart(ctxTwo,
     configpie,
);
 
// datatables
$(document).ready( function () {
    $('#myTable').DataTable();
} );


// Counte up numbers
const counters=document.querySelectorAll(".numbers");

counters.forEach((counter)=>{
    counter.innerText="0";

    const updateNumber= ()=>{
        const target = +counter.getAttribute('data-target');
        // console.log(typeof target,target);
        const c= +counter.innerText;
        const increment=target/80;
        // console.log(increment);

        if(c<target){
            counter.innerText=`${Math.ceil(c+increment)}`;
            setTimeout(updateNumber,1);
        }
    };
    updateNumber();
})

// Menulist events
const parentList= document.querySelector("#menuListDivs");
 console.log(parentList);
const lists=document.querySelectorAll("#menuListDivs ul li a");
console.log(lists);

parentList.addEventListener('click',(e)=>{
    const list_clicked= e.target;
    console.log(list_clicked);

    lists.forEach((curElem) => {
        curElem.classList.remove('box-shadow');
    })

    list_clicked.classList.add("box-shadow");
    
})

// Open and close menu
 const menu_button= document.getElementById("menuButton");
 const content= document.getElementById("content");
 const bodyid= document.getElementById("bodyid");
 const navigation= document.getElementById("navigation");
 const units= document.querySelectorAll(".unit");
 
 menu_button.addEventListener('click',()=>{
    navigation.classList.toggle("width-0");
    navigation.classList.toggle("padding-0");
    
    for(let css of units){
        css.classList.toggle("display-none");
    }
    content.classList.toggle("width-100");
    bodyid.classList.toggle("grid-1");
 })

// Define the query
const mediaQuery = window.matchMedia('(min-width: 1000px)')
if (mediaQuery.matches) {
    navigation.classList.add("width-0");
    navigation.classList.add("padding-0");
    
    for(let css of units){
        css.classList.add("display-none");
    }
    content.classList.add("width-100");
    bodyid.classList.add("grid-1");
}


// mobile menu
const mobileMenu= document.getElementById("mobileMenuDiv");
document.getElementById("closeMenuId").addEventListener('click',()=>{
    
    mobileMenu.style.width="0";
    document.querySelectorAll("#mobileMenuDiv ul li a").forEach((e)=>{
        e.style.display="none";
    })
    document.querySelectorAll('.nav-Overlay').forEach((e)=>{
        e.style="visibility:hidden;opacity:0;"
    })
})

document.getElementById("mobilemenuButton").addEventListener('click',()=>{
    const mediaQueryTwo = window.matchMedia('(max-width: 700px)')
    
    document.querySelectorAll("#mobileMenuDiv ul li a").forEach((e)=>{
        
        if(mediaQueryTwo.matches){
            mobileMenu.style.width="80%";
        }
        else{
            mobileMenu.style.width="30%";
        }
        e.style.display="block";
        document.querySelectorAll('.nav-Overlay').forEach((e)=>{
            e.style="visibility:visible;opacity:1;"
        })
    })
})

document.querySelectorAll(".nav-Overlay").forEach((e)=>{
    e.addEventListener('click',()=>{
        mobileMenu.style.width="0";
    document.querySelectorAll("#mobileMenuDiv ul li a").forEach((e)=>{
        e.style.display="none";
    })
    document.querySelectorAll('.nav-Overlay').forEach((e)=>{
        e.style="visibility:hidden;opacity:0;"
    })
    })
})



