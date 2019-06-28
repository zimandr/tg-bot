const TelegramBot = require('node-telegram-bot-api')
const _ = require('lodash')
const config = require('./config')
const helper = require('./helper')
const keyboard = require('./keyboard')
const kb = require('./keyboard-buttons')

helper.logStart() 
const bot = new TelegramBot(config.TOKEN, {
  polling: true
})

bot.onText(/\/start/, msg => {


	const text = `Здравствуйте, ${msg.from.first_name}\nВыберите команду для начала работы:`
  bot.sendMessage(helper.getChatId(msg), text, {
    reply_markup: {
      keyboard: keyboard.home
    }
  })

})


bot.on('message', msg => {
  console.log('Working bot', msg.from.first_name)

  const chatId = helper.getChatId(msg)

  switch (msg.text) {
    case kb.home.favourite:
      showFavouriteFilms(chatId, msg.from.id)
			break
		case kb.home.about:
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/3rHIMUXHqbs.jpg')
				const htmlabout = `
				<strong>Анастасия Клименкова</strong>
				<i>Я - фотограф</i>
Моя главная задача- сделать мир ярче сохраняя, счастливые моменты в фотографиях!
Я помогаю человеку оставаться самим собой в кадре, быть настоящим.
Придя ко мне, можете быть уверены — Ваши фотографии не будут похожи на другие.
					`
					bot.sendMessage(chatId, htmlabout, {
						parse_mode: 'HTML'
					})
			break
    case kb.home.contakts:
				const htmlcontakts = `
				<i>Профессиональная фотосъемка.
				 Работаю с любыми проектами: 
				 от предметной съемки и flat lay до свадебных фотосессий.</i>

				 <strong>Номер телефона:</strong>
				  +7 963 606 81 99
				 <strong>E-mail:</strong>
				  malvina.malina1@yandex.ru
				 <strong>Skype:</strong> 
				 agent0802
				 <strong>Веб-сайт:</strong> 
				 anastasiaklimenkova.ru
					`
					bot.sendMessage(chatId, htmlcontakts, {
						parse_mode: 'HTML',
						reply_markup: {
							inline_keyboard: [
								[
									{
										text: 'VK',
										url: 'https://vk.com/malvina.malina1'  
									},
									{
										text: 'Instagram',
										url: 'https://www.instagram.com/malvina___malina/' 
									},
									{
										text: 'Whatsapp',
										url: 'https://api.whatsapp.com/send?phone=79636068199' 
									}
								]
							]
						}
					})
					
			break
		case kb.home.portfoliomy:
      bot.sendMessage(chatId, `Выберите раздел:`, {
        reply_markup: {keyboard: keyboard.portfolio}
      })
      break
    case kb.portfolio.foto1:

				bot.sendMessage(chatId, 'Идет загрузка фотографий.....')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/1TAbmIhFj1I-1024x684.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/fE7L774WLgw-1024x684.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/2018/02/DSC_07951-1024x683.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/loAWiN0vavA-691x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/2018/02/DSC_08641-683x1024.jpg')

      break
    case kb.portfolio.foto2:
				bot.sendMessage(chatId, 'Идет загрузка фотографий.....')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/bcf80mfaTSQ-683x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_9970-684x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_0947%D1%84%D1%82.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_0040.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_1011.jpg')

      break
    case kb.portfolio.foto3:
				bot.sendMessage(chatId, 'Идет загрузка фотографий.....')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_3142-1024x684.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_0388-683x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/Yafd_LAjEBY-683x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_0664%D1%84%D1%82.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_0502-683x1024.jpg')

			break
		case kb.portfolio.foto4:
				bot.sendMessage(chatId, 'Идет загрузка фотографий.....')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/2018/02/DSC_0322-21-683x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/h5qs6vq8vu0%D0%BE%D0%BE-683x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_1276-683x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/pjEPwFoqY9g-683x1024.jpg')
				bot.sendPhoto(chatId, 'ttp://anastasiaklimenkova.ru/wp-content/uploads/pjEPwFoqY9g-683x1024.jpg')

			break
		case kb.portfolio.foto5:
				bot.sendMessage(chatId, 'Идет загрузка фотографий.....')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/SsGpaTRhGf8-682x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/hWi8C56-PaE.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/G94vdc7cDfc-684x1024.jpg')

			break
		case kb.home.pricemy:
      bot.sendMessage(chatId, `Выберите пакет:`, {
        reply_markup: {keyboard: keyboard.prices}
      })
      break
		case kb.prices.silver:
				const htmlsilver = `
				<strong>ПАКЕТ SILVER</strong>
				<b>Количество:</b>
				 <i>35 фото в обработке (за час)</i>
				<b>Продолжительность:</b>
				 <i>от 1 часа</i>
				<b>Срок подготовки:</b> 
				<i>2-3 недели</i>
				<strong>Стоимость:</strong>  <pre>3900 руб.</pre>
					`
					bot.sendMessage(chatId, htmlsilver, {
						parse_mode: 'HTML'
					})

			break
		case kb.prices.gold:
				const htmlgold = `
				<strong>ПАКЕТ GOLD</strong>
				<b>Количество:</b>
				 <i>50 фото в ретуши + все оригиналы</i>
				<b>Продолжительность:</b>
				<i>от 1 часа</i>
				<b>Срок подготовки:</b>
				<i>2-3 недели</i>
				<strong>Стоимость:</strong>  <pre>4900 руб.</pre>
					`
					bot.sendMessage(chatId, htmlgold, {
						parse_mode: 'HTML'
					})

		  break
		case kb.prices.ruby:
				const htmlruby = `
				<strong>ПАКЕТ RUBY</strong>
				<b>Работа со стилистом по одежде</b>
				<b>Количество:</b>
				<i>30 фото в ретуши + 1 полный образ для съемки, который стилист привозит сам</i>
				<b>Продолжительность:</b>
				<i>от 1 часа</i>
				<b>Срок подготовки:</b>
				<i>3 недели</i>
				<strong>Стоимость:</strong>  <pre>6500 руб.</pre>
					`
					bot.sendMessage(chatId, htmlruby, {
						parse_mode: 'HTML'
					})

			break
		case kb.prices.bonus:
				const htmlbonus = `
				<strong>ДОПОЛНИТЕЛЬНО</strong>
				К КАЖДОМУ ПАКЕТУ 
				МОЖНО ПРИОБРЕСТИ 
				УСЛУГИ ВИЗАЖИСТА
				<pre>(2500 РУБ.) </pre>
				К СТОИМОСТИ
					`
					bot.sendMessage(chatId, htmlbonus, {
						parse_mode: 'HTML'
					})

			break
    case kb.home.contakts:
      bot.sendMessage(chatId, `Отправить местоположение`, {
        reply_markup: {
          keyboard: keyboard.contakts
        }
      })
      break
    case kb.back:
      bot.sendMessage(chatId, `Что хотите посмотреть?`, {
        reply_markup: {keyboard: keyboard.home}
      })
      break
  }

  if (msg.location) {
    getCinemasInCoord(chatId, msg.location)
  }
})

