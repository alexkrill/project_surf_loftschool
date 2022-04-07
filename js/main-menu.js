;(function() {
    
 const measureWidth = item => {
    let reqItemWidth = 0;


    const screenWidth = $(window).width();
    const container = item.closest(".main-menu__list");
    const titleBlocks = container.find(".main-menu__title");
    const titleWidth = titleBlocks.width() * titleBlocks.length;

    const textContainer = item.find(".main-menu__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        reqItemWidth = screenWidth - titleWidth;
    } else {
        reqItemWidth = 500;
    }

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingRight - paddingLeft
    }

};

const closeEveryBarinContainer = container => {
    const item = container.find(".main-menu__item")
    const content = container.find(".main-menu__content")

    item.removeClass("active");
    content.width(0);
};

const openBar = item => {
    const hiddenBlock = item.find(".main-menu__content");
    const reqWidth = measureWidth(item);
    const textBlock = item.find(".main-menu__container")
    
    item.addClass("active");
    hiddenBlock.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
};

$(".main-menu__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget)
    const item = $this.closest(".main-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".main-menu__list")

    if (itemOpened) {
        closeEveryBarinContainer(container);
    } else {
        closeEveryBarinContainer(container);
        openBar(item);
    }
});

})()