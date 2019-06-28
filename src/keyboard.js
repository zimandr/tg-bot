const kb = require('./keyboard-buttons')

module.exports = {
  home: [
    [kb.home.portfoliomy],
    [kb.home.about, kb.home.pricemy, kb.home.contakts],
    [kb.home.record],
    [kb.home.feedback]
  ],
  portfolio: [
    [kb.portfolio.foto1,kb.portfolio.foto2],
    [kb.portfolio.foto3, kb.portfolio.foto4],
    [kb.portfolio.foto5],
    [kb.back]
  ],
  prices: [
    [kb.prices.silver,kb.prices.gold],
		[kb.prices.ruby],
		[kb.prices.bonus],
    [kb.back]
   ],
  contakts: [
    [
      {
        text: 'Отправить местоположение',
        request_location: true
      }
    ],
    [kb.back]
	],
  backback: [
    [kb.back]
  ]
	
}