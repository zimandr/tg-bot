const TelegramBot = require('node-telegram-bot-api')
//const mongoose = require('mongoose')
//const geolib = require('geolib')
const _ = require('lodash')
const config = require('./config')
const helper = require('./helper')
const keyboard = require('./keyboard')
const kb = require('./keyboard-buttons')
//const database = require('../database.json')


helper.logStart() //видеть что скрипт запустился

//  mongoose.Promise = global.Promise
//  //Подключение к БД
//  mongoose.connect(config.DB_URL, {
//    useMongoClient: true
//  })
//    .then(() => console.log('MongoDB connected'))
//    .catch((err) => console.log(err))

//  require('./models/portfolio.model')
//  require('./models/price.model')
//  require('./models/user.model')

//  const Portfolio = mongoose.model('portfoliomy')
//  const Price = mongoose.model('prices')
//  const User = mongoose.model('users')

// // Загружаем данные в базу из database.json  
  // database.portfoliomy.forEach(p => new Portfolio(p).save().catch(e => console.log(e)))
  // database.prices.forEach(pr => new Price(pr).save().catch(e => console.log(e)))

// const ACTION_TYPE = {
//   TOGGLE_FAV_PORTFOLIO: 'tfp',
//   SHOW_CINEMAS: 'sc',
//   SHOW_CINEMAS_MAP: 'scm',
//   SHOW_FILMS: 'sf'
// }

// // ==============ниже все что касается нашего бота, вверх логический слой
//Создаем экземпляр класса телеграмбота
const bot = new TelegramBot(config.TOKEN, {
  polling: true
})

bot.onText(/\/start/, msg => {

	// const text = `Здравствуйте, ${msg.from.first_name}\nЯ бот-помощник фотографа Анастасии Клименковой, г.Домодедово.\n Благодарю Вас за интерес к фотографии!\nВыберите команду для начала работы:`
	const text = `Здравствуйте, ${msg.from.first_name}\nВыберите команду для начала работы:`
  bot.sendMessage(helper.getChatId(msg), text, {
    reply_markup: {
      keyboard: keyboard.home
    }
  })

})

// //обработчик сообщений
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
				// bot.sendMessage(chatId, `Семейные`, {
				// 	reply_markup: {keyboard: keyboard.portfolio}
				// })
				bot.sendMessage(chatId, 'Идет загрузка фотографий.....')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/1TAbmIhFj1I-1024x684.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/fE7L774WLgw-1024x684.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/2018/02/DSC_07951-1024x683.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/loAWiN0vavA-691x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/2018/02/DSC_08641-683x1024.jpg')
				// bot.sendMessage(chatId, 'Фото загружены')
      // sendPortfolioByQuery(chatId, {type: 'foto1'})
      break
    case kb.portfolio.foto2:
				bot.sendMessage(chatId, 'Идет загрузка фотографий.....')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/bcf80mfaTSQ-683x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_9970-684x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_0947%D1%84%D1%82.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_0040.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_1011.jpg')
				// bot.sendMessage(chatId, 'Фото загружены')
      break
    case kb.portfolio.foto3:
				bot.sendMessage(chatId, 'Идет загрузка фотографий.....')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_3142-1024x684.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_0388-683x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/Yafd_LAjEBY-683x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_0664%D1%84%D1%82.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_0502-683x1024.jpg')
				// bot.sendMessage(chatId, 'Фото загружены')
			break
		case kb.portfolio.foto4:
				bot.sendMessage(chatId, 'Идет загрузка фотографий.....')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/2018/02/DSC_0322-21-683x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/h5qs6vq8vu0%D0%BE%D0%BE-683x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/DSC_1276-683x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/pjEPwFoqY9g-683x1024.jpg')
				bot.sendPhoto(chatId, 'ttp://anastasiaklimenkova.ru/wp-content/uploads/pjEPwFoqY9g-683x1024.jpg')
				// bot.sendMessage(chatId, 'Фото загружены')
			break
		case kb.portfolio.foto5:
				bot.sendMessage(chatId, 'Идет загрузка фотографий.....')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/SsGpaTRhGf8-682x1024.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/hWi8C56-PaE.jpg')
				bot.sendPhoto(chatId, 'http://anastasiaklimenkova.ru/wp-content/uploads/G94vdc7cDfc-684x1024.jpg')
				// bot.sendMessage(chatId, 'Фото загружены')
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
      // sendPortfolioByQuery(chatId, {type: 'silver'})
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
			//  sendPortfolioByQuery(chatId, {type: 'gold'})
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
			//  sendPortfolioByQuery(chatId, {type: 'ruby'})
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
			//  sendPortfolioByQuery(chatId, {type: 'bonus'})
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

// bot.on('callback_query', query => {
//   const userId = query.from.id
//   let data
//   try {
//     data = JSON.parse(query.data)
//   } catch (e) {
//     throw new Error('Data is not an object')
//   }

//   const { type } = data

//   if (type === ACTION_TYPE.SHOW_CINEMAS_MAP) {
//     const {lat, lon} = data
//     bot.sendLocation(query.message.chat.id, lat, lon)
//   } else if (type === ACTION_TYPE.SHOW_CINEMAS) {
//     sendCinemasByQuery(userId, {uuid: {'$in': data.cinemaUuids}})
//   } else if (type === ACTION_TYPE.TOGGLE_FAV_PORTFOLIO) {
//     toggleFavouriteFilm(userId, query.id, data)
//   } else if (type === ACTION_TYPE.SHOW_FILMS) {
//     sendPortfolioByQuery(userId, {uuid: {'$in': data.portfolioUuids}})
//   }
// })

// bot.on('inline_query', query => {
//   Portfolio.find({}).then(portfoliomy => {
//     const results = portfoliomy.map(f => {
//       const caption = `Название: ${p.name}\n ${p.picture1}\n${p.picture2}\n${p.picture3}\n${p.picture4}\n${p.picture5}`
//       return {
//         id: p.uuid,
//         type: 'photo',
//         photo_url: p.picture,
//         thumb_url: p.picture,
//         caption: caption,
//         reply_markup: {
//           inline_keyboard: [
//             [
//               {
//                 text: `Кинопоиск: ${p.name}`,
//                 url: p.link
//               }
//             ]
//           ]
//         }
//       }
//     })

//     bot.answerInlineQuery(query.id, results, {
//       cache_time: 0
//     })
//   })
// })



// bot.onText(/\/f(.+)/, (msg, [source, match]) => {
//   const portfolioUuid = helper.getItemUuid(source)
//   const chatId = helper.getChatId(msg)

//   Promise.all([
//     Portfolio.findOne({uuid: portfolioUuid}),
//     User.findOne({telegramId: msg.from.id})
//   ]).then(([portfolio, user]) => {
    
//     let isFav = false
    
//     if (user) {
//       isFav = user.portfoliomy.indexOf(portfolio.uuid) !== -1
//     }
    
//     const favText = isFav ? 'Удалить из избранного' : 'Добавить в избранное'
    
//     const caption = `Название: ${portfolio.name}\n`

//     bot.sendPhoto(chatId, portfolio.picture1, {
//       caption: caption,
//       reply_markup: {
//         inline_keyboard: [
//           [
//             {
//               text: favText,
//               callback_data: JSON.stringify({
//                 type: ACTION_TYPE.TOGGLE_FAV_PORTFOLIO,
//                 portfolioUuid: portfolio.uuid,
//                 isFav: isFav
//               })
//             }//,
//             // {
//             //   text: 'Показать кинотеатры',
//             //   callback_data: JSON.stringify({
//             //     type: ACTION_TYPE.SHOW_CINEMAS,
//             //     cinemaUuids: portfolio.cinemas
//             //   })
//             // }
//            ]//,
//           // [
//           //   {
//           //     text: `Кинопоиск ${portfolio.name}`,
//           //     url: portfolio.link
//           //   }
//           // ]

//         ]
//       }
//     })
//   })
  
// })

// bot.onText(/\/c(.+)/, (msg, [source, match]) => {
//   const cinemaUuid = helper.getItemUuid(source)
//   const chatId = helper.getChatId(msg)

//   Cinema.findOne({uuid: cinemaUuid}).then(cinema => {

//     bot.sendMessage(chatId, `Кинотеатр ${cinema.name}`, {
//       reply_markup: {
//         inline_keyboard: [
//           [
//             {
//               text: cinema.name,
//               url: cinema.url
//             },
//             {
//               text: 'Показать на карте',
//               callback_data: JSON.stringify({
//                 type: ACTION_TYPE.SHOW_CINEMAS_MAP,
//                 lat: cinema.location.latitude,
//                 lon: cinema.location.longitude
//               })
//             }
//           ],
//           [
//             {
//               text: 'Показать фильмы',
//               callback_data: JSON.stringify({
//                 type: ACTION_TYPE.SHOW_FILMS,
//                 filmUuids: cinema.films
//               })
//             }
//           ]
//         ]
//       }
//     })
//   })
// })



// ===============================
//Вспомогательные функции
//Функция sendPortfolioByQuery которая отправляет различные фильмы, по определенному database запросу
// function sendPortfolioByQuery(chatId, query) {
//   Portfolio.find(query).then(portfoliomy => {
//     const html = portfoliomy.map((p, i) => {
//       return `<b>${i + 1}</b> ${p.name} - /f${p.uuid}`
//     }).join('\n')

//     sendHTML(chatId, html, 'portfoliomy')
//   })
// }
// //-----Функция позволяет быстро отправлять HTML
// function sendHTML(chatId, html, kbName = null) {
//   const options = {
//     parse_mode: 'HTML'
//   }

//   if (kbName) {
//     options['reply_markup'] = {
//       keyboard: keyboard[kbName]
//     }
//   }

//   bot.sendMessage(chatId, html, options)
// }
// //----
// function getCinemasInCoord(chatId, location) {

//   Cinema.find({}).then(cinemas => {

//     cinemas.forEach(c => {
//       c.distance = geolib.getDistance(location, c.location) / 1000
//     })

//     cinemas = _.sortBy(cinemas, 'distance')

//     const html = cinemas.map((c, i) => {
//       return `<b>${i + 1}</b> ${c.name}. <em>Расстояние</em> - <strong>${c.distance}</strong> км. /c${c.uuid}`
//     }).join('\n')

//     sendHTML(chatId, html, 'home')
//   })

// }
// //----
// function toggleFavouriteFilm(userId, queryId, {filmUuid, isFav}) {

//   let userPromise

//   User.findOne({telegramId: userId})
//     .then(user => {
//       if (user) {
//         if (isFav) {
//           user.films = user.films.filter(fUuid => fUuid !== filmUuid)
//         } else {
//           user.films.push(filmUuid)
//         }
//         userPromise = user
//       } else {
//         userPromise = new User({
//           telegramId: userId,
//           films: [filmUuid]
//         })
//       }

//       const answerText = isFav ? 'Удалено' : 'Добавлено'

//       userPromise.save().then(_ => {
//         bot.answerCallbackQuery({
//           callback_query_id: queryId,
//           text: answerText
//         })
//       }).catch(err => console.log(err))
//     }).catch(err => console.log(err))
// }
// //----
// function showFavouriteFilms(chatId, telegramId) {
//   User.findOne({telegramId})
//     .then(user => {
//       if (user) {
//         Film.find({uuid: {'$in': user.films}}).then(films => {
//           let html

//           if (films.length) {
//             html = films.map((f, i) => {
//               return `<b>${i + 1}</b> ${f.name} - <b>${f.rate}</b> (/f${f.uuid})`
//             }).join('\n')
//           } else {
//             html = 'Вы пока ничего не добавили'
//           }

//           sendHTML(chatId, html, 'home')
//         }).catch(e => console.log(e))
//       } else {
//         sendHTML(chatId, 'Вы пока ничего не добавили', 'home')
//       }

//     }).catch(e => console.log(e))
// }
// //---
// function sendCinemasByQuery(userId, query) {
//   Cinema.find(query).then(cinemas => {

//     const html = cinemas.map((c, i) => {
//       return `<b>${i + 1}</b> ${c.name} - /c${c.uuid}`
//     }).join('\n')

//     sendHTML(userId, html, 'home')
//   })

// }