$ (document) . ready(function() {
$ ("#submit") .click(function() {
var name=$("#name").val();
var pas=$("#pas").val();
var pas2=$("#pas2").val():
var email=$("#email").val();
if(name"") {
alert ("Введите ваше иня");
else if (age=="") {
alert ("Введите ваш возраст");
else if (pas=="") {
alert ("Введите ваш пароль");
else if (pas2=="") {
alert ("Повторите пароль");
else if (pas!=pas2) {
alert ("Введенные пароли не совпадают"):
else if (pas.length<6) {
alert ("Пароль должен быть не меньше 6 символов"):
else if (email -"") {
alert ("Введите ваш E-mail");
Jelse (
alert ("Имя"+name+"\n пароль"+password+"\n E-mail"+email):
j);





