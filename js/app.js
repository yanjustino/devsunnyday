// logger.js
(function () {
    'use strict';

	var app = angular.module('app', []);

	app.controller('Talker', Talker);

	Talker.$inject = ['$scope']

	function Talker($scope) {
		
		$scope.organizers=
		[
			{
				"nome": "Yan",
				"sobrenome": "Justino",
				"foto": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/11221353_1031686336864229_3225866611291680833_n.jpg?oh=98ed624d5f874596d93383d112daf0c4&oe=56710A90&__gda__=1450847994_71e9cce2ad3378434593feff8962c684"
			},
			{
				"nome": "Henri",
				"sobrenome": "Cavalcante",
				"foto": "https://avatars.githubusercontent.com/u/2352034?v=3"
			},
			{
				"nome":"Tiago",
				"sobrenome":"Jesus",
				"foto": "https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/1482994_10152022176119464_914957283_n.jpg?oh=a5eccd45b0029b1ff3f72c7e27480a56&oe=566708E3&__gda__=1450814056_7f9dbfe111b782cc12c46615bc79e69d"
			}
		]

		$scope.talkers =
		[
			{
				"nome": "Andre",
				"sobrenome": "Baltieri",
				"empresa": "Consultor",
				"facebook": "http://facebook.com/andre.baltieri",
				"github": "http://github.com/andrebaltieri",
				"titulo": "Single Page Applications com NodeJs e AngularJs",
				"resumo": "Nesta palestra vamos aprender a criar aplicações ricas e modernas utilizando o NodeJs  como Backend e o AngularJs como frontend.",
				"cv": "Trabalha com desenvolvimento de aplicações web desde 2003, em projetos de médio e grande porte no Brasil, EUA, Inglaterra e Holanda. Atualmente é consultor independente e realiza treinamentos na plataforma web/.NET. Amante de JavaScript, focado em SPA e desenvolvimento web para aplicativos móveis para diversos dispositivos e áreas.",
				"foto": "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/1601238_10153087456948592_5860558739462804315_n.jpg?oh=7feba13d46b60207c6bf584ebed75f09&oe=5684604F&__gda__=1451454320_c8928df65b0453c28f9de1044a8ce59c"
			},
			{
				"nome": "Giovanni Bassi",
				"sobrenome": "Bassi",
				"empresa": "Lambda3",
				"facebook": "",
				"github": "https://github.com/giggio",
				"titulo": "Os novos compiladores do C# e VB: Roslyn",
				"resumo": "O compilador do C# foi reescrito em C# (antes era escrito com C++). Um código de mais de dez anos foi inteiramente revisto, novas camadas e abstrações foram criadas, resultando em um compilador muito mais modular, com diversas novas capacidades e muito mais fácil de manter. Esse não é o típico compilador que você conheceu na faculdade, ele vai mais além em diversos outros aspectos. Nessa palestra vamos entender essa nova arquitetura e descobrir que até para quem não é um cientista da computação tem muitas coisas divertidas para aprender e fazer com ele.",
				"cv": "Arquiteto e desenvolvedor, agilista, escalador, provocador.\nPrograma porque gosta, e começou a trabalhar com isso porque acha que trabalhar como administrador é meio chato. Por esse motivo sempre diz que nunca mais vai virar gerente de ninguém. E também porque acredita que pessoas autogerenciadas funcionam melhor e por acreditar que heterarquia é melhor que hierarquia. Mas isso é outro assunto.\nFoi reconhecido  Microsoft MVP depois que alguém notou que ele não dormia a noite pra ficar escrevendo artigos, cuidando e participando do .Net Architects, gravando o podcast Tecnoretórica, escrevendo posts no blog e falando o que bem entende no twitter @giovannibassi. E por falar nisso é no twitter que conta pra todos que gerencia de projetos deve ser feita pelo time e não por um gerentes, que greves em TI são coisas sem sentido e que stored procedure com regras de negócio são malígnas.\nVocê já deve ter percebido (até porque está lá na primeira frase) que Giovanni é agilista. De tanto gostar disso ele trouxe os programas de certificação e treinamento  PSD e PSM da Scrum.org pro Brasil, e por causa deles, do MVP e de algum trabalho que aparece tem que ficar indo pros EUA de vez enquando, coisa que prefere não fazer. (É bem comum você ouvir ele perguntando porque a Scrum.org e a Microsoft não estão na Itália, por exemplo.)\nJunto com alguns Jedis criou a Lambda3, que, apesar de ser pequena e de não ser muito comum no Brasil, insiste em fazer projetos e consultoria direito. Por causa da Lambda3 ele tem trabalhado mais do que quando era consultor independente, mas menos do que a maioria das pessoas. Quer dizer, isso se você considerar que os trabalhos junto à comunidade não são trabalho, caso contrário ele trabalha mais que a maioria das pessoas.\nRecentemente ele resolveu que merecia viver melhor e ganhar uns anos de vida e desistiu de ser sedentário, fazendo algum barulho de vez em quando com os amigos no twitter com a hashtag #DotNetEmForma. Por causa do convite recente de amigos do lado Open Source (que ele respeita e admira), começou a escalar, e agora está sempre com as mãos machucadas. Mas ainda dá pra programar. Você encontra ele sempre em algum evento, como o TechEd, e o DNAD, mas também outros menos comuns para o pessoal do .NET, como a RubyConf. Nesses eventos, ou ele está vendo palestras, ou batendo papo com alguém, ou codando alguma aplicação que alguém achou que dava pra fazer durante o evento.",
				"foto": "https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-9/10300084_846739575361241_4486578800220105110_n.jpg?oh=89eb92d4cf2bdd25bbc39d0871740e87&oe=5635F7BD&__gda__=1448228450_6b0867aad66ca66eb751f4ec8bf73283"
			},
			{
				"nome": "Fernando",
				"sobrenome": "Henrique",
				"empresa": "Microsoft",
				"facebook": "https://www.facebook.com/ferhenriquef",
				"github": "https://github.com/FerHenrique",
				"titulo": "Executando teste de carga com Windows Azure",
				"resumo": "Testes de carga são de extrema necessidade quando falamos em aplicações corporativas de grande porte. Nesta sessão, será demonstrado como planejar e executar testes de carga utilizando Visual Studio Online. \n\nFácil de configurar e executar, todas as fases do processo serão abordadas, podendo trazer melhoras significativas para suas aplicações. \n\nComo resultado você saberá como planejar e executar testes de carga utilizando Visual Studio Online, coletar contadores de performance e analisar os resultados obtidos de acordo com as boas práticas recomendadas.\n",
				"cv": "Fernando é mestre em Sistemas de Informação pela Universidade de São Paulo, atua na área de Tecnologia da Informação a dez anos. Atualmente trabalha como Development Premier Field Engineer na Microsoft. Fernando é um Formed-Microsoft MVP nas competências de Data Platform Development e C#. Na área de desenvolvimento já trabalhou em distintas áreas focais, desde sistemas contábeis, até projetos de geo-referenciamento na região Amazônica. Possui certificações Microsoft em distintas categorias e dedica boa parte do tempo com pesquisas, no suporte ao aprimoramento de sistemas e contribuindo com a comunidade de desenvolvedores Microsoft .NET. \n",
				"foto": "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-9/1441307_10202726151577610_1952290580_n.jpg?oh=acd83f358c640741bc9b415ba19e8a1c&oe=564E6696&__gda__=1446715388_93aedaeef350c61910934c513447b979"
			},
			{
				"nome": "Gleydson",
				"sobrenome": "Lima",
				"empresa": "SIGSoft",
				"facebook": "https://www.facebook.com/gleydson.lima.50",
				"github": "https://twitter.com/gleydsonlima",
				"titulo": "20 anos de Java - passado e futuro",
				"resumo": "A tecnologia Java completou 20 anos como a mais utilizada no mundo e ainda em crescimento de número de projetos e desenvolvedores. Nesta palestra abordaremos um overview dos 20 anos da tecnologia e o seu futuro para a tecnologia, empresas e profissionais. ",
				"cv": "Empresário, Diretor e Fundador da SIG Software e Consultoria em Tecnologia da Informação;  Engenheiro de Computação; Mestre em Sistemas Distribuídos e Doutor em Linha de Produto de Software pela UFRN; Principal autor da família sistemas SIG-UFRN; Foi Diretor de Sistemas da UFRN de 2006 a 2012;  Coordenador da Especialização de Sistemas Corporativos da UNI-RN desde 2005;  Foi  Arquiteto de Software do projeto Loterias da Caixa Econômica Federal em 2002;   Consultor em diversas projetos em empresas locais e nacionais;  Foi membro ativo da comunidade Java Nacional no período de 2003-2008.  ",
				"foto": "https://media.licdn.com/media/p/8/000/297/380/19e59f1.jpg"
			},
			{
				"nome": "Bruno",
				"sobrenome": "Henrique",
				"empresa": "Bearch",
				"facebook": "https://www.facebook.com/brunogaru",
				"github": "https://github.com/brunohenrique",
				"titulo": "Big Data, Inteligência Artificial, Machine Learning e o que Hollywood não vai te contar",
				"resumo": "Terra, 2020. O mundo sofreu uma grande mudança com o poder que as máquinas obtiveram. Elas passaram a interferir no dia a dia das pessoas, dão opiniões em decisões, extraem informações dos seres humanos para uso próprio e tudo parece acabado para a sobrevivência da nossa espécie.\n\nEsse poderia muito bem ser a sinopse de um filme B de Hollywood, talvez um blockbuster (Transcendence prova isso). Eles gostam muito desse tom dramático. Embora seja uma visão interessante, não é única. Eu tenho uma visão mais otimista sobre o assunto. \n\nSegundo estudos do International Data Corporation (IDC), em 2020 chegaremos a 40 mil exabytes, o equivalente a 100 milhões de vezes a quantidade de livros já escritos hoje. Não precisamos esperar chegar em 2020 para tirarmos proveito do que chamamos de Big Data. Essas duas palavras acabam servindo de guarda-chuva para uma série de outras que estão mudando a forma de nos relacionarmos com o mundo.\n\nNessa palestra eu pretendo mostrar alguns insights de como já podemos tirar proveito de coisas como inteligência artificial e machine learning e o que precisamos entender para lidar com tudo isso.",
				"cv": "Engenheiro de software, palestrante e grande entusiasta do Open Source, Arquitetura de Software, Testes, Sistemas Distribuídos, Big Data, Inteligência Artificial e Machine Learning. Também sou o fundador do grupo Ruby Natal e um dos organizadores do GDG Natal e RuPy Natal. Hoje trabalho como Engenheiro de software sênior usando Go (Golang), mas a maior parte do meu trabalho anterior foi com Ruby e Rails.",
				"foto": "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/10846162_10203298468241157_62892637777950712_n.jpg?oh=add9a050d35d9d6e4381a83429d1fa35&oe=567F4F0C&__gda__=1447461690_c890801f3c94407df7f1dd81882ce242"
			},
			{
				"nome": "Eduardo",
				"sobrenome": "Pires",
				"empresa": "Consultor",
				"facebook": "https://www.youtube.com/user/headfox",
				"github": "https://github.com/eduardopires",
				"titulo": "Por dentro do novo ASP.NET 5",
				"resumo": "O ASP.NET 5 é uma nova versão do ASP.NET, 100% reescrito, novo stack, novo framework, novas funcionalidades que vão mudar totalmente a forma de entregar projetos Web em diversas plataformas\n\nVenha conhecer todas estas grandes mudanças e fique preparado para a nova ERA da Web com .NET",
				"cv": "Microsoft MVP (ASP.NET / IIS), Arquiteto de Sistemas, Desenvolvedor, Palestrante, Blogueiro, Instrutor, Pai, Dono de Casa e Entusiasta de Home Office. ",
				"foto": "https://pt.gravatar.com/userimage/35884144/45dab1daa69fce19731e3cf4963f96f5.jpg?size=500"
			},
			{
				"nome": "Ronualdo",
				"sobrenome": "Maciel",
				"empresa": "Thoughtworks",
				"facebook": "https://www.facebook.com/profile.php?id=100000018153828",
				"github": "https://github.com/ronualdo",
				"titulo": "Inovação e agilidade: ",
				"resumo": "Vivemos em um mundo onde a tecnologia deixou de ser apenas um diferencial competitivo e passou a ser parte do coração do negócio de cada empresa.\n\nIsso junto a necessidade cada vez maior dessas organizações de reinventarem constantemente seus modelos de negócio traz um novo cenário para as equipes de desenvolvimento.\n\nNessa palestra iremos falar um pouco sobre os desafios desse novo cenário e como as metodologias e práticas ágeis se apresentam como um excelente suporte para esse ambiente onde estar preparado para mudanças é essencial.",
				"cv": "Desenvolvedor de software adepto de práticas ágeis atuando na área desde 2005 tendo ajudando na construção de soluções de software para as mais diversas áreas, desde financeiro até empresas de varejo. Atua como desenvolvedor consultor senior da ThoughWorks Brazil, focando nas áreas de qualidade de código, arquitetura de software e em causar polêmicas durante os coffee-breaks.",
				"foto": "img/ronualdo.jpg"
			},
			{
				"nome": "Carlos",
				"sobrenome": "Cavalcanti",
				"empresa": "Enjoei‎",
				"facebook": "https://www.facebook.com/caval.carlos",
				"github": "https://github.com/carloscavalcanti",
				"titulo": "Hello World ao mundo mobile: Focado no Android",
				"resumo": "Vamos abordar a situação do cenário atual do universo mobile, as oportunidades no presente e o que está por vir no futuro. Mostrar o caminho que se pode ser seguido para adentrar neste mundo cheio de boas oportunidades. Identificar quais os lados positivos e negativos das principais plataformas presentes na atualidade e um pouquinho de código para conhecermos mais o funcionamento do Android.",
				"cv": "Desenvolvedor de software desde 2006 com experiência nas plataformas desktop, web e mobile. Atualmente focado em desenvolvimento nativo para dispositivos móveis com mais de 5 anos de experiência com Android.\nFormado em Sistemas da Informação pela UnP e pós-graduando em Desenvolvimento de Aplicações para dispositivos móveis na Unisinos.\nDesenvolveu mais de 30 aplicativos, dentre eles na plataforma Android, iOS e Windows Phone.",
				"foto": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/000/28a/177/2c70a85.jpg"
			},
			{
				"nome": "Victor",
				"sobrenome": "Cavalcanti",
				"empresa": "Lambda3",
				"facebook": "https://www.facebook.com/vccavalcante",
				"github": "https://www.facebook.com/vccavalcante",
				"titulo": "Trabalhando com Grunt, Bower e outras coisinhas WEB",
				"resumo": "Trabalhando com Grunt, Bower e outras coisinhas WEB",
				"cv": "Victor Cavalcante é Microsoft MVP na tecnologia ASP.Net, trabalha com desenvolvimento web a 12 anos,é focado em padrões de desenvolvimento para web. Trabalha na Lambda3 (www.lambda3.com.br) empresa ágil que fundou com outros MVPs e amigos, e que insiste em fazer software certo. É ainda professor universitário e atua no grupo .NET Architects desde seu início. Acompanhe seu twitter para saber as novidades: @vcavalcante.",
				"foto": "https://mvp.microsoft.com/en-us/PublicProfile/Photo/4030594"
			},
			{
				"nome": "Noilson",
				"sobrenome": "Caio",
				"empresa": "IVIA",
				"facebook": "https://br.linkedin.com/in/ncaio/pt",
				"github": "https://github.com/ncaio",
				"titulo": "Caso Torroulette: Como abstrair pesquisas com o uso de técnicas atuais de desenvolvimento.",
				"resumo": "Esta palestra aborda o tema do desenvolvimento como ferramenta de abstração de técnicas, conceitos e pesquisas. Fala de como utilizei ferramentas, métodos e linguagens de programação para compreender e expressar ideias. Percebendo a possibilidade de utilizar as características da rede de anonimato Tor para testes de conceitos (POC), precisei de artefatos para construir cenários e aplicações, entrando em ação Golang, Docker, SeleniumHQ, Zeromq, entre outras ferramentas.",
				"cv": "Pós-Graduação em Redes de Computadores e Telecomunicações . Atualmente é analista de suporte, professor na rede particular de ensino superior, tem experiência na área de Ciência da Computação, com ênfase em Redes de Computadores, Segurança e GNU Linux. Pesquisador autônomo, palestrante e projetista/Maker.",
				"foto": "https://media.licdn.com/media/p/2/005/0b9/20a/3e06697.jpg"
			},
			{
				"nome": "Mateus",
				"sobrenome": "Gomes",
				"empresa": "HE:Labs",
				"facebook": "http://facebook.com/mateusg18",
				"github": "http://github.com/mateusg",
				"titulo": "Mantendo a sua app Rails organizada",
				"resumo": "Quando criamos uma nova app com Rails, o framework já nos traz uma série de convenções de nomenclatura e estrutura que nos auxilia a mantê-la organizada. Entretanto, conforme ela cresce e vai se tornando mais complexa, torna-se cada vez mais difícil manter o codebase organizado e de fácil compreensão.Nessa palestra serão apresentadas algumas ferramentas e práticas para auxiliar nesse desafio e manter o código da sua app Rails mais legível e manutenível, facilitando a compreensão do código por outros desenvolvedores.",
				"cv": "Programador de software, é entusiasta de tecnologias web, boas práticas de programação, arquitetura de software e open-source software. Tem trabalhado nos últimos anos com Ruby on Rails + tecnologias front-end, geralmente com project rescue (recuperação de projetos legados) e mantimento de codebases complexos.",
				"foto": "img/mateus.JPG"
			},
			{
				"nome": "Ítalo",
				"sobrenome": "Rossi",
				"empresa": "Evolux",
				"facebook": "https://www.facebook.com/italorossib",
				"github": "https://github.com/italorossi",
				"titulo": "Comunicação em Tempo Real com WebRTC",
				"resumo": "Introdução a tecnologia que está possibilitando que o mercado de telecomunicações crie novas soluções pensando em todos. * O que é o WebRTC; * Conceitos;* Aplicações;* Desafios;* Verto Communicator.",
				"cv": "CTO e Co-Fundador da Evolux, programador Python, SysAdmin.",
				"foto": "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/10641111_747091105373293_8276710888319398401_n.jpg?oh=1a9e0bcb03a6058b3aa1a18353938e74&oe=564427E2"
			}
		];
	}

})();