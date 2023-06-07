let scrolled = false;
let isAddedLink = false;

window.onscroll = () => {
    if ($(window).scrollTop() >= 50) {
        if (!isAddedLink) {
            isAddedLink = true

            $("body").append("<script src='//code.tidio.co/ae8kspxkubbiish2hhtkeqjr09f2jhvx.js' async></script>");
        }
    }
    if ($(window).scrollTop() >= ($(document).height() - $(window).height()) * 0.3) {
        if (!scrolled) {
            scrolled = true;
            $("body").append("<script defer src='./assets/js/moment.js' async></script>");

            $.ajax({
                url: "https://api.specialist.hrhunt.ru/api/v1/specialist/vacancy",
                type: 'GET',
                dataType: 'json',
                success: function (res) {
                    res.data.forEach(item => {
                        let a = moment(new Date()),
                            b = moment(item.deadlineDate);
                        let deadlineDate = b.diff(a, 'days')

                        $('.vacancies-card').append('<div class="posted-vacancies__slider-item ' + (!item.status ? 'completed' : '') + '">\n' +
                            '        <div class="posted-vacancies__slider-head">\n' +
                            '          <div class="posted-vacancies__slider-status">' + (item.status ? 'Активен' : 'Завершен') + '</div>\n' +
                            '          <h3>' + item.name + '</h3>\n' +
                            '          <h4>' + moment(item.createdAt).format("MMMM DD, YYYY h:mma") + '</h4>\n' +
                            '          <p class="vacancy-card-description">' + item.description + '</p>\n' +
                            '        </div>\n' +
                            '        <div class="posted-vacancies__slider-info">\n' +
                            '          <div class="posted-vacancies__slider-info__item">\n' +
                            '            <div>\n' +
                            '              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '                <path d="M6.57895 6.93182L8.08421 7.7L7.68947 8.25455L5.78947 7.27273V5H6.57895V6.93182ZM10 6.81818C10 8.57727 8.35263 10 6.31579 10C5.31053 10 4.40526 9.65455 3.74211 9.09091H1.05263C0.468421 9.09091 0 8.68636 0 8.18182V0.909091C0 0.409091 0.468421 0 1.05263 0H1.57895V3.18182L2.89474 2.5L4.21053 3.18182V0H7.36842C7.94737 0 8.42105 0.404545 8.42105 0.909091V4.20909C9.37368 4.78636 10 5.73636 10 6.81818ZM8.94737 6.81818C8.94737 5.56364 7.76842 4.54545 6.31579 4.54545C4.86316 4.54545 3.68421 5.56364 3.68421 6.81818C3.68421 8.07273 4.86316 9.09091 6.31579 9.09091C7.76842 9.09091 8.94737 8.07273 8.94737 6.81818Z" fill="#004737"/>\n' +
                            '              </svg>\n' +
                            '              <span>До завершения:</span>\n' +
                            '            </div>\n' +
                            '            <div>' + (deadlineDate > 0 ? deadlineDate : 0) + ' дней</div>\n' +
                            '          </div>\n' +
                            '          <div class="posted-vacancies__slider-info__item">\n' +
                            '            <div>\n' +
                            '              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '                <path d="M6.36364 5C5.15 5 2.72727 5.665 2.72727 7V8H10V7C10 5.665 7.57727 5 6.36364 5ZM2.27273 3V1.5H1.36364V3H0V4H1.36364V5.5H2.27273V4H3.63636V3H2.27273ZM6.36364 4C6.84585 4 7.30831 3.78929 7.64928 3.41421C7.99026 3.03914 8.18182 2.53043 8.18182 2C8.18182 1.46957 7.99026 0.960859 7.64928 0.585786C7.30831 0.210714 6.84585 0 6.36364 0C5.88142 0 5.41896 0.210714 5.07799 0.585786C4.73701 0.960859 4.54545 1.46957 4.54545 2C4.54545 2.53043 4.73701 3.03914 5.07799 3.41421C5.41896 3.78929 5.88142 4 6.36364 4Z" fill="#004737"/>\n' +
                            '              </svg>\n' +
                            '              <span>Получили приглашение:</span>\n' +
                            '            </div>\n' +
                            '            <div>' + item.totalcountspecialist + ' чел.</div>\n' +
                            '          </div>\n' +
                            '        </div>\n' +
                            '      </div>')
                    })

                    $('.posted-vacancies__slider').slick({
                        dots: false,
                        prevArrow: false,
                        nextArrow: false,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 1000,
                        autoplaySpeed: 2000,
                        responsive: [
                            {
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 3,
                                }
                            },
                            {
                                breakpoint: 900,
                                settings: {
                                    slidesToShow: 2,
                                }
                            },
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 1,
                                }
                            }
                        ]
                    });
                }
            });
        }
    }
};
