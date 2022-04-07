(function() {

const findBlock = alias => {
    return $('.reviews__item').filter((ndx, item) => {
        return $(item).attr('data-linked-with') == alias;

    });
};


$('.interactive-avatar').click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr('data-open');
    const itemToShow = findBlock(target);
    const curItem = $this.closest('.reviews__user-item');

    itemToShow.addClass('active').siblings().removeClass('active');
    curItem.addClass('active-link').siblings().removeClass('active-link');
})

})()