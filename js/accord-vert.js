(function() {

const openItem = item => {
    const container = item.closest('.team__item');
    const contentBlock = container.find('.team__desc');
    const textBlock = contentBlock.find('.team__wrapper');
    const blockHeight = textBlock.height();

    container.addClass('active');
    contentBlock.height(blockHeight);
}

const closeAll = container => {
    const items = container.find('.team__desc');
    const itemContainer = container.find('.team__item');

    itemContainer.removeClass('active');
    items.height(0);
}

$('.team__personal').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.team__list');
    const elemContainer = $this.closest('.team__item');

    $this.find('.team__triangle').toggleClass('team__triangle--rotated');


    if (elemContainer.hasClass('active')) {
        closeAll(container);
    } else {
        closeAll(container);
        openItem($this);
    }

});

})()