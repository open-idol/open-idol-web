'use strict';

angular.module('openIdolWebApp')
  .directive('dictionary', function ($window, d3Service, d3Helper) {
    return {
      template: '<svg></svg>',
      restrict: 'E',
      scope:{
        tastes: "="
      },
      link: function postLink(scope, element, attrs) {
        scope.data = [{"emotion": "-", "name": "슬프"}, {"emotion": "", "name": "까맣"}, {"emotion": "-", "name": "좆같"}, {"emotion": "+", "name": "좋"}, {"emotion": "+", "name": "그러하"}, {"emotion": "+", "name": "상관없"}, {"emotion": "-", "name": "작"}, {"emotion": "", "name": "하"}, {"emotion": "", "name": "되"}, {"emotion": "-", "name": "부질없"}, {"emotion": "", "name": "푸르"}, {"emotion": "-", "name": "무겁"}, {"emotion": "-", "name": "춥"}, {"emotion": "", "name": "오"}, {"emotion": "", "name": "차"}, {"emotion": "", "name": "낫"}, {"emotion": "-", "name": "못하"}, {"emotion": "-", "name": "미치"}, {"emotion": "-", "name": "힘들"}, {"emotion": "-", "name": "얇"}, {"emotion": "+", "name": "즐겁"}, {"emotion": "-", "name": "못생기"}, {"emotion": "", "name": "길"}, {"emotion": "-", "name": "역겹"}, {"emotion": "+", "name": "재밌"}, {"emotion": "-", "name": "멀"}, {"emotion": "+", "name": "예쁘"}, {"emotion": "+", "name": "배부르"}, {"emotion": "", "name": "뒤늦"}, {"emotion": "+", "name": "맛나"}, {"emotion": "+", "name": "커다랗"}, {"emotion": "+", "name": "잘나"}, {"emotion": "+", "name": "빠르"}, {"emotion": "-", "name": "배고프"}, {"emotion": "-", "name": "가렵"}, {"emotion": "-", "name": "두렵"}, {"emotion": "+", "name": "착하"}, {"emotion": "-", "name": "싫"}, {"emotion": "-", "name": "드럽"}, {"emotion": "+", "name": "크"}, {"emotion": "+", "name": "편하"}, {"emotion": "", "name": "맵"}, {"emotion": "+", "name": "엄청나"}, {"emotion": "", "name": "외"}, {"emotion": "", "name": "검"}, {"emotion": "", "name": "여깄"}, {"emotion": "-", "name": "안쓰럽"}, {"emotion": "-", "name": "흉하"}, {"emotion": "-", "name": "시끄럽"}, {"emotion": "+", "name": "해맑"}, {"emotion": "+", "name": "이뿌"}, {"emotion": "-", "name": "아깝"}, {"emotion": "", "name": "늘"}, {"emotion": "-", "name": "심하"}, {"emotion": "+", "name": "강하"}, {"emotion": "-", "name": "우습"}, {"emotion": "+", "name": "드물"}, {"emotion": "+", "name": "멋있"}, {"emotion": "+", "name": "슬"}, {"emotion": "-", "name": "과하"}, {"emotion": "+", "name": "일없"}, {"emotion": "", "name": "달르"}, {"emotion": "-", "name": "아쉽"}, {"emotion": "+", "name": "이뽀"}, {"emotion": "-", "name": "아푸"}, {"emotion": "-", "name": "시퍼렇"}, {"emotion": "+", "name": "변함없"}, {"emotion": "+", "name": "귀엽"}, {"emotion": "", "name": "긴하"}, {"emotion": "-", "name": "없"}, {"emotion": "+", "name": "기쁘"}, {"emotion": "+", "name": "둏"}, {"emotion": "+", "name": "많"}, {"emotion": "+", "name": "괜찮"}, {"emotion": "", "name": "푸"}, {"emotion": "", "name": "다르"}, {"emotion": "-", "name": "너무하"}, {"emotion": "", "name": "죠"}, {"emotion": "+", "name": "힘차"}, {"emotion": "+", "name": "멋지"}, {"emotion": "-", "name": "덥"}, {"emotion": "", "name": "들"}, {"emotion": "-", "name": "흔하"}, {"emotion": "", "name": "똑같"}, {"emotion": "-", "name": "구리"}, {"emotion": "-", "name": "징그럽"}, {"emotion": "", "name": "보"}, {"emotion": "", "name": "싸"}, {"emotion": "-", "name": "짠하"}, {"emotion": "+", "name": "부럽"}, {"emotion": "-", "name": "좁"}, {"emotion": "-", "name": "더럽"}, {"emotion": "", "name": "줄"}, {"emotion": "+", "name": "이쁘"}, {"emotion": "+", "name": "젊"}, {"emotion": "-", "name": "어렵"}, {"emotion": "+", "name": "까리하"}, {"emotion": "-", "name": "안타깝"}, {"emotion": "", "name": "빨갛"}, {"emotion": "-", "name": "재미없"}, {"emotion": "-", "name": "속상하"}, {"emotion": "-", "name": "틀림없"}, {"emotion": "-", "name": "없다"}, {"emotion": "-", "name": "비싸"}, {"emotion": "", "name": "세"}, {"emotion": "-", "name": "빡시"}, {"emotion": "", "name": "어딨"}, {"emotion": "+", "name": "화끈하"}, {"emotion": "", "name": "깊"}, {"emotion": "+", "name": "잘생기"}, {"emotion": "+", "name": "친하"}, {"emotion": "-", "name": "얍삽하"}, {"emotion": "", "name": "머"}, {"emotion": "+", "name": "그럴싸하"}, {"emotion": "", "name": "이렇"}, {"emotion": "+", "name": "맛있"}, {"emotion": "-", "name": "징하"}, {"emotion": "", "name": "짧"}, {"emotion": "", "name": "여리"}, {"emotion": "-", "name": "낯설"}, {"emotion": "-", "name": "귀찮"}, {"emotion": "-", "name": "약하"}, {"emotion": "", "name": "궁금하"}, {"emotion": "+", "name": "높"}, {"emotion": "+", "name": "고맙"}, {"emotion": "+", "name": "재미있"}, {"emotion": "", "name": "세차"}, {"emotion": "-", "name": "따갑"}, {"emotion": "-", "name": "밉"}, {"emotion": "", "name": "있"}, {"emotion": "-", "name": "나쁘"}, {"emotion": "", "name": "같"}, {"emotion": "-", "name": "시렵"}, {"emotion": "", "name": "어떻"}, {"emotion": "-", "name": "고프"}, {"emotion": "", "name": "늦"}, {"emotion": "+", "name": "주옥같"}, {"emotion": "", "name": "낮"}, {"emotion": "-", "name": "부족하"}, {"emotion": "", "name": "어리"}, {"emotion": "-", "name": "무섭"}, {"emotion": "+", "name": "다되"}, {"emotion": "", "name": "다름없"}, {"emotion": "", "name": "지"}, {"emotion": "-", "name": "안되"}, {"emotion": "+", "name": "올바르"}, {"emotion": "", "name": "허"}, {"emotion": "-", "name": "아프"}, {"emotion": "+", "name": "이삐"}, {"emotion": "", "name": "게르"}, {"emotion": "-", "name": "짜"}, {"emotion": "", "name": "짜르"}, {"emotion": "", "name": "짤"}, {"emotion": "-", "name": "못나"}, {"emotion": "", "name": "매섭"}, {"emotion": "+", "name": "그렇"}, {"emotion": "", "name": "싶"}, {"emotion": "", "name": "그"}, {"emotion": "+", "name": "쉽"}];

        d3Service.d3().then(function(d3){
          var margin = parseInt(attrs.margin) || 50;
          var svg = d3.select(element[0])
                .select('svg');

          window.onresize = function() {
            scope.$apply();
          };
          
          scope.$watch(function() {
            return angular.element($window)[0].innerWidth;
          }, function() {
            scope.render(scope.data);
          });
          
          scope.render = function(data) {
            svg.selectAll('*').remove();

            if (!data) return;

            d3Helper.size(svg, 1200, 1000);
            d3Helper.background_color(svg);
            d3Helper.dictionary(svg, scope.data);
          };
        }); // d3
      }
    };
  });
