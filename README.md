# previsao_tempo

### Configurar o front-end

- Para que o front-end possa ser executado é necessário ter instalala na máquina local ou remota o **Node.js**
1. [nodejs.org](https://nodejs.org/en/ "nodejs.org")
1.1 após a instalação do node ser concuída dois utilitários de linha de comando estarão disponíveis no path do sistema operacional, para testalos basta abrir uma janela do terminal e digitar:
`$ node --version`
e
`$ npm --version`

caso nenhum dos comandos tenham dado erro significa que o ambiente para o front-end está pronto.
- O front-end foi desenvolvido com react, para isso uma ferramenta é necessária o **create-react-app**, basta utilizar o npm para instalar a ferramenta
`$ npm install -g create-react-app`
*Sendo o npm o gerenciador de pacotes node a flag install indica que queremos baixar um pacote e a flag -g adiciona o pacote ao path do sistema *
Agora basta navegar com terminal até a pasta **api-previsao-tempo** e executar o:
`npm install` ou `npm -i` o npm irá baixar todas asdepencias do projeto e após a instalações de todas as depencias o projeto está pronto para ser executado.
para executar basta digitar `npm start`

#### Dependecias do projeto
- [reactstrap](reactstrap.github.io/ "reactstrap") para utilizar os componentes do Bootstarp no projeto
- [bootstrap](http://getbootstrap.com/ "bootstrap") - para utilizar o css do bootstrap no projeto
[axios](https://github.com/axios/axios "axios") -para as quisisições ajax para as api

### Configurar o back-end
Para este seup é necessário ter conhecimentos básico de Django para poder prosseguir os passos do setup

- Para que o back-end possa ser executado é necessário ter instalado na máquina local ou remota o **Python**
1. [python.org](https://www.python.org/downloads/ "Download Python")
1.1 O processo de instalação da linguagem python é padrão em todos os sistemas operacionais
1.1 **Importante**: Durante o processo de instalação no sistema Windows  é necessário informar ao wizard de instalação que o comando **python** precisa ser adicionado ao path do sistema

Assim como a instalação do Node o Python também adiciona dois utilitários, o python em si e o **pip**, que nada mais é do que gerenciador de pacotes python PyPi
- Uma pequena api foi desenvolvida em python/Django pra tratar das requisições do front e lidar com o banco. E também um ambiente virtual python foi criado com o *virtualenv*, para iniciar o setup do back end é necessárioter o virtualenv instalado, para isto:
`$ pip install virtualenv`
Feito iso, basta navegar até a pasta da virtualenv onde a api foi encapsulada: **venv**
Neste diretórios encontra-se outros 4 diretórios: *apiprevisaotempo*, *Include*,*Lib*,*Scripts*
Antes de iniciar o setup da api é necessário ativar o ambient virutal, para isso navegue até a pasta Scripts e execute o comando no terminal:
` path/to/dir/venv/Script/$ activate ` após a execução o terminal ficará assim:
` (venv) path/to/dir/venv/Script/$` indicando que o ambiente virtual *venv* está ativo.
Agora é necessário preparar o banco de dados, antes disso entre no diretório do projeto django **apiprevisaotempo** nele se encontra a app api ( dentro da pasta **api**) e a pasta coração do projeto **apiprevisaotempo** o nível do projeto é onde se encontrao aqruivo `manage.py`
Para preparar a api basta rodar o comando:
`pip install -r requiments.txt` e o python erá baixar as dependecias, incluindo o drive de conexão com o banco postgress (**psycopg2**)
Além disso os parâmetros de cofiguração de conexão com o banco de dados serão necessário, para isso entre na pasta **apiprevisaotempo/apiprevisaotempo** e localize o arquivo `setting.py` será necessáio editar este aruivo para a conexão com o banco de dados, localize a linha onde a variável `DATABASES` se encontra, altere para:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'previsao_tempo',
            'USER': DB_USER,
            'PASSWORD': DB_PASS,
            'HOST': DB_HOST,
            'PORT': '5432',
        }
    }
Onde **DB_USER, DB_PASS e DB_HOST** são os parâmetros de conexão, usuário senha e host do banco de dados
Perceba que o django irá busca o banco `previsao_tempo`, logo, esta banco precisa ser criado previamente no postgress.

Django configurado e banco de dados criado e rodando já é possível testar a aplicação, mas antes disso vamos iniciar o banco atraves do Django, então a nível do projeto execute:
` (venv) path/to/dir/venv/apiprevisaotempo/$ python manage.py   makemigrations` isso irá preperar as migrações do banco de dados, em seguida o comando `migrate` para que o banco seja de fato aplicado.
Api pronta, basta testar com o comando ` python manage.py runsver`
Um servidor local será executao ouvindo na porta 8000
a rota padrão da api http:localhost:8000 irá realizar o dump do banco, enviar todos os dados.
Você pode analisar a veloção do banco de dados pelo utili´tario PGSAdmin ou pelo prórpio django.
Para criar um super usuário no django mate o servidor com CTRL + C em seguida digite: `python manage.py createsuperuser` informe login do usuário administrado, em seguida rode o servidor novamente e acesse: locahost:8000/admin com o login que você acabou de criar, usuário e senha.
Localize a apliucção API e o banco registros, onde se encontra todos os dados do banco.



#### Dependecias do projeto
- [django-cors-headers](rhttps://pypi.org/project/django-cors-headers/ "django-cors-headers") para abilitar um middleware de cors no app
- [psycopg2](http://getbootstrap.com/ "bootstrap") - drive python de conexão com PostgreSQL
