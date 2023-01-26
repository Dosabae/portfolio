var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Python Enthusiast","Blender Enthusiast"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
})
var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "../portfolio/images/sun.png";
    }else{
        icon.src = "../portfolio/images/moon.png";
    }
}


const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        for(let i=0; i<totalNavList; i++)
        {
            const a = navList[i].querySelector("a");
            a.addEventListener("click", function()
            {
                removebackSection();
                for(let j=0; j<totalNavList; j++){
                    if(navList[j].querySelector("a").classList.contains("active"))
                    {
                        addbackSection(j);
                        //allSection[j].classList.add("back-section");
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active")
                showSection(this);
                if(window.innerWidth < 1200)
                {
                    asideSectionTogglerBtn();
                }
            })
        }
        function removebackSection()
        {
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("back-section");
            }
        }
        function addbackSection(num)
        {
            allSection[num].classList.add("back-section");
        }
        function showSection(element)
        {
            for(let i=0; i<totalNavList; i++)
            {
                allSection[i].classList.remove("active");
            }
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector("#" + target).classList.add("active")
        }
        function updateNav(element)
        {
            for(let i=0; i<totalNavList; i++)
            {
                navList[i].querySelector("a").classList.remove("active");
                const target = element.getAttribute("href").split("#")[1];
                if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
                {
                    navList[i].querySelector("a").classList.add("active");
                }
            }
        }
        document.querySelector(".hire-me").addEventListener("click", function()
        {
            const sectionIndex = this.getAttribute("data-section-index");
            //console.log(sectionIndex);
            showSection(this);
            updateNav(this);
            removebackSection();
            addbackSection(sectionIndex);
        })
        const navTogglerBtn = document.querySelector(".nav-toggler"),
                aside = document.querySelector(".aside");
                navTogglerBtn.addEventListener("click", () =>
                {
                    asideSectionTogglerBtn();
                })
                function asideSectionTogglerBtn()
                {
                    aside.classList.toggle("open");
                    navTogglerBtn.classList.toggle("open");
                    for(let i=0; i<totalSection; i++ )
                    {
                        allSection[i].classList.toggle("open")
                    }
                }
