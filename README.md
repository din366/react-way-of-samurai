<h1 style="text-align: center;">Samurai social network - социальная сеть на базе api с сайта https://social-network.samuraijs.com
</h1>

<img style="text-align: center; max-width: 600px;"
src="https://github.com/din366/images/blob/main/readme%20images/samurai-social-network/samurai-social-network-mainimage.png" alt="project image">

<a href="https://social-network-samurai.vercel.app" style="text-align: center;">Развернутое приложение на Vercel</a>

:warning:
Из-за отсутствия в API при запросах возвращаемого токена не проходит 
авторизация пользователей на iOS, macOS, ipadOS.

## Что может приложение:

<ol>
  <li>Просмотр всех зарегистрированных пользователей, добавление в друзья.</li>
  <li>Просмотр профиля пользователей.</li>
  <li>Редактирование своего профиля с дальнейшей передачей данных в api: 
изменение фото, статус пользователя, блок "обо мне", job статус, контакты.</li>
  <li>Возможность общаться в чате с друзьями (отправка сообщений, получение сообщений, наличие даты
отправки сообщений, время с последнего захода пользователя). Все данные проходят через API.</li>
  <li>Страница логина с необходимостью ввода капчи при нескольких неправильных попытках.</li>
</ol>

## Используемые подходы и инструмены:

<ol>
  <li>React</li>
  <li>Redux</li>
  <li>Formik</li>
  <li>Axios</li>
  <li>Reselect</li>
  <li>Классовые контейнерные компоненты для связью со стором и функциональные компоненты для рендера приложения.</li>
  <li>Отдельно сформированный объект с асинхронными запросами api.js</li>
  <li>Lazy loaded main components</li>
</ol>

## Подробнее о реализации проекта:

<h3 style="text-decoration: underline">Страница логина:</h3>

<p>На странице логина присутствует fast login при помощи тестового аккаунта, а также возможность залогиниться в свой личный аккаунт.
Форма логина сформирована при помощи пакета Formik. Настроена валидация полей.</p>
<p>При оправке неверных данных логина или пароля на сервер появляется информация об ошибочно введенных данных.
При превышении количества попыток появляется капча для исключения возможности подбора пароля.</p>
<p>В хедере после логина появляется иконка пользователя с возможностью логаута.</p>

<img style="text-align: center; max-width: 600px;"
src="https://github.com/din366/images/blob/main/readme%20images/samurai-social-network/incorrect-login.gif" alt="project image">

<h3 style="text-decoration: underline">Страница профиля (для авторизованных пользователей):</h3>

<p>Если страница профиля является профилем текущего пользователя, то помимо наличия личных данных
есть возможность изменять статус пользователя, фотографию, а также все контактные данные в отдельном модальном окне.</p>
<p>При просмотре чужого профиля кнопки изменения данных отсутствуют.</p>

<p>Изменение личных данных производится в отдельном модальном окне с валидацией полей контактов.</p>

<img style="text-align: center; max-width: 600px;"
src="https://github.com/din366/images/blob/main/readme%20images/samurai-social-network/profile.gif" alt="project image">

<h3 style="text-decoration: underline">Страница друзей (для авторизованных пользователей):</h3>

<p>На данной странице представлены пользователи, которые были добавлены в друзья.
Каждого пользователя можно убрать из друзей, а также одной кнопкой перейти в чат с ним.
Также на странице присутствует пагинация.</p>

<img style="text-align: center; max-width: 600px;"
src="https://github.com/din366/images/blob/main/readme%20images/samurai-social-network/friends.gif" alt="project image">

<h3 style="text-decoration: underline">Страница личных чатов (для авторизованных пользователей):</h3>

<p>Представлены все активные чаты. При открытии чата отображается логин, фото и последняя активность собеседника.</p>
<p>Реализована отправка сообщений. У каждого сообщения отображается время отправки. 
В зависимости от давности отправки может отображаться как дата, так и сколько секунд/минут назад было отправлено сообщение.</p>

<p>Последовательность сообщений чата идет снизу вверх, а также автоматически прокручивается вниз при загрузке. Реализована подгрузка предыдущих сообщений по нажатию на кнопку.</p>

<img style="text-align: center; max-width: 600px;"
src="https://github.com/din366/images/blob/main/readme%20images/samurai-social-network/messages.gif" alt="project image">

<h3 style="text-decoration: underline">Страница всех пользователей:</h3>

<p>На странице представлены все пользователи, зарегистрированные в сервисе.
Из всего списка можно показать только друзей, а также подписаться на любого пользователя,
т.е. добавить в друзья и перейти в его профиль.
Также на странице присутствует пагинация.</p>

<img style="text-align: center; max-width: 600px;"
src="https://github.com/din366/images/blob/main/readme%20images/samurai-social-network/users.gif" alt="project image">

<h3 style="text-decoration: underline">Мобильная верстка:</h3>

<p>Для мобильных устройств реализован удобный и интуитивно понятный интерфейс. Наличие бургер-меню.
В сообщениях возврат к диалогам реализован в стиле telegram - нажатием на кнопку назад в текущем чате.</p>

<p align="center">
  <img style="text-align: center; max-width: 600px;" src="https://github.com/din366/images/blob/main/readme%20images/samurai-social-network/mobile.gif" alt="project image">
</p>

<p>Для работы с приложением:</p>

## сборка приложения
### `npm run build`

- сборка и оптимизация приложения в папке build для деплоя.

## запуск приложения
### `npm start`

- запуск осуществляется по адресу [http://localhost:3000](http://localhost:3000)
