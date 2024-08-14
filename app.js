const menu_universitemiz = document.querySelectorAll("#mobile-menu-first .main-sub-menu li");
const menu_akademik = document.querySelectorAll("#main-sub-menu-second li");
const menu_arastirma = document.querySelectorAll("#third-sub-menu-container .third-sub-menu li");
const menu_ogrenci = document.querySelectorAll("#fourth-sub-menu-container li");
const menu_hastane = document.querySelectorAll("#fifth-sub-menu-container li");

menu_universitemiz.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        console.log('menu_universitemiz', item, item.attributes.div_id.value);
        $(".menu_universitemiz").hide();
        $("#" + item.attributes.div_id.value).show();
    });
});

menu_akademik.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        console.log('menu_akademik', item, item.attributes.div_id.value);
        $(".menu_akademik").hide();
        $("#" + item.attributes.div_id.value).show();
    });
});

menu_arastirma.forEach(item => {
    item.addEventListener('mouseenter', () => {
        console.log('menu_arastirma', item, item.attributes.div_id.value);
        $(".menu_arastirma").hide();
        $("#" + item.attributes.div_id.value).show();
    });
})

menu_ogrenci.forEach(item => {
    item.addEventListener('mouseenter', () => {
        console.log('menu_ogrenci', item, item.attributes.div_id.value);
        $(".menu_ogrenci").hide();
        $("#" + item.attributes.div_id.value).show();
    });
})
menu_hastane.forEach(item => {
    item.addEventListener('mouseenter', () => {
        console.log('menu_hastane', item, item.attributes.div_id.value);
        $(".menu_hastane").hide();
        $("#" + item.attributes.div_id.value).show();
    });
})