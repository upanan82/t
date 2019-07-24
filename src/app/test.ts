export interface ITest {
  question: string;
  answer: string[];
}

export const images = [
  '../assets/01.jpg',
  '../assets/02.jpg',
  '../assets/03.jpg',
  '../assets/04.jpg',
  '../assets/05.jpg',
  '../assets/06.jpg',
  '../assets/07.jpg',
  '../assets/08.jpg',
  '../assets/09.jpg',
  '../assets/10.jpg',
  '../assets/11.jpg',
  '../assets/12.jpg',
  '../assets/13.jpg',
  '../assets/14.jpg',
  '../assets/15.jpg',
  '../assets/16.jpg',
  '../assets/17.jpg',
  '../assets/18.jpg',
  '../assets/19.jpg',
  '../assets/20.jpg',
  '../assets/21.jpg',
  '../assets/22.jpg',
  '../assets/23.jpg',
];

export const test: ITest[] = [
    {
        question: 'Головними областями програмної інженерії згідно SWEBOK є',
        answer: [
            'конструювання програмного забезпечення',
            'інженерія вимог'
        ]
    },
    {
        question: 'Організаційними областями програмної інженерії згідно SWEBOK є',
        answer: [
            'керування конфігурацією',
            'процес інженерії програмних систем'
        ]
    },
    {
        question: 'Головними областями програмної інженерії згідно SWEBOK не є',
        answer: [
            'керування конфігурацією',
            'процес інженерії програмних систем'
        ]
    },
    {
        question: 'Валідація вимог - це',
        answer: [
            'перевірка повноти, несуперечності і однозначності специфікації і правильності виконання функцій системи відповідно до вимог'
        ]
    },
    {
        question: 'Основні систематичні методи забезпечення якості програм включають в себе',
        answer: [
            'верифікація компонентів',
            'верифікація вимог',
            'валідація вимог'
        ]
    },
    {
        question: 'Структурна декомпозиція продукту',
        answer: [
            'дерево, що показує ієрархічність результатів проекту'
        ]
    },
    {
        question: 'Структурна декомпозиція робіт',
        answer: [
            'дерево, що показує розподіл завдань необхідних для досягнення цілі'
        ]
    },
    {
        question: 'Мережевий графік',
        answer: [
            'граф взаємозвязків між роботами проекту плану з вказанням тривалості окремих робіт'
        ]
    },
    {
        question: 'Діаграма Ганта',
        answer: [
            'графік робіт за проектом з вказаними календарними датами'
        ]
    },
    {
        question: 'Керування проектом - це',
        answer: [
            'керівництво роботами команди виконавців проекту для реалізації проекту з використанням методів керування, планування і контролю робіт, керування ризиками, ефективною організацією роботи і комунікаційними потоками в команді виконавців'
        ]
    },
    {
        question: 'Планування - це',
        answer: [
            'процес розподілу і призначення ресурсів (матеріальних і людських) з урахуванням вартості і часу виконання проекту'
        ]
    },
    {
        question: 'Основними складовими будь-якого проекту є',
        answer: [
            'ресурси (людські, фінансові, технічні)',
            'час виконання проекту',
            'вартість виконання проекту'
        ]
    },
    {
        question: 'Відповідальність за координацію і реалізацію основних складових проекту несе',
        answer: [
            'менеджер проекту'
        ]
    },
    {
        question: 'Відповідальність за ідейну, функціональну сторону проекту несе',
        answer: [
            'головний програміст'
        ]
    },
    {
        question: 'Склад і кількість співробітників, що входять в команду проекту, залежить від',
        answer: [
            'масштабу робіт',
            'досвіду співробітників'
        ]
    },
    {
        question: 'Ризики можуть бути',
        answer: [
            '"Відомі", які можна планувати',
            '"Невідомі", які не ідентифіковано і не можуть бути спрогнозовані'
        ]
    },
    {
        question: 'Планування керування ризиками - це',
        answer: [
            'процес прийняття рішень щодо попередження ризиків, або зменшення їх наслідків'
        ]
    },
    {
        question: 'Кількісна оцінка ризиків - це',
        answer: [
            'процес визначення ймовірності виникнення ризиків, впливу наслідків ризиків на проект і прийняття рішень з оцінки ризику'
        ]
    },
    {
        question: 'Визначення вимог, як правило, проводиться',
        answer: [
            'шляхом обговорення поглядів замовника на систему з майбутніми її розробниками'
        ]
    },
    {
        question: 'Вимоги до програмного забезпечення складаються з',
        answer: [
            'системних вимог',
            'функціональних вимог',
            'нефункціональних вимог'
        ]
    },
    {
        question: 'Нефункціональні вимоги для більшості сучасних багатокористувацьких програмних систем включають такі умови і обмеження', // error
        answer: [
            'конфіденційність, безпеку і захист даних',
            'одночасність доступу до системи користувачів',
            'відмовостійкість',
            'продуктивність'
        ]
    },
    {
        question: 'Нефункціональні вимоги визначають',
        answer: [
            'деякі обмеження до властивостей функцій або до системи, важливих для користувачів або розробників'
        ]
    },
    {
        question: 'Вимоги користувачів визначають',
        answer: [
            'мети і завдання, які користувачам дозволить вирішувати майбутня система'
        ]
    },
    {
        question: 'Функціональні вимоги визначають',
        answer: [
            'перелік функцій або сервісів, які повинна виконувати система, а також обмежень на дані і поведінку системи'
        ]
    },
    {
        question: 'Системні вимоги визначають',
        answer: [
            'зовнішні умови для виконання системних функцій і обмежень на створюваний продукт, а також вимоги до опису підсистем'
        ]
    },
    {
        question: 'В обговоренні вимог на систему беруть участь', // error
        answer: [
            'представники замовника з декількох професійних груп',
            'аналітики і розробники майбутньої системи'
        ]
    },
    {
        question: 'Що дає узгоджена область дій по проекту',
        answer: [
            'можливість оцінити необхідні інвестиції в проект'
        ]
    },
    {
        question: 'Специфікація вимог до програмного забезпечення - це',
        answer: [
            'формалізоване опис функціональних, нефункціональних і системних вимог, вимог до характеристик якості, а також до структури програмного забезпечення, принципам взаємодії з іншими компонентами, алгоритмам і структурі даних системи',
        ]
    },
    {
        question: 'Інструментальні засоби розробки програмного забезпечення - це',
        answer: [
            'засоби підтримки кодування і тестування (компілятори, генератори програм, отладчики і ін)'
        ]
    },
    {
        question: 'Теоретичні засоби розробки програмного забезпечення - це',
        answer: [
            'методи верифікації та докази правильності специфікації програм'
        ]
    },
    {
        question: 'Мета процесу валідації',
        answer: [
            'переконатися, що готова продукція дійсно задовольняє свого вихідного призначенню'
        ]
    },
    {
        question: 'Налагодження - це',
        answer: [
            'перевірка опису програмного обєкта на мові програмування з метою виявлення в ньому помилок і подальше їх усунення'
        ]
    },
    {
        question: 'Інспекція програмного забезпечення - це',
        answer: [
            'статична перевірка відповідності програми заданим специфікаціями'
        ]
    },
    {
        question: 'Статичний аналіз програмного забезпечення полягає в',
        answer: [
            'інспекції вихідного коду і наскрізному контролю програми'
        ]
    },
    {
        question: 'Динамічні методи тестування використовуються',
        answer: [
            'в процесі виконання програм'
        ]
    },
    {
        question: 'Основні методи тестування включають',
        answer: [
            'метод "чорної скрині"',
            'метод "скляної скрині"',
            'метод "білої скрині"'
        ]
    },
    {
        question: 'Функціональні тести створюються по',
        answer: [
            'зовнішнім специфікаціям функцій',
            'проектній інформації',
            'тексту на мові програмування'
        ]
    },
    {
        question: 'Всі помилки, які виникають в програмах, прийнято поділяти на такі класи',
        answer: [
            'помилки інтерфейсів',
            'помилки обсягу даних',
            'логічні і функціональні помилки'
        ]
    },
    {
        question: 'Відповідно до міжнародного стандарту ANSI / IEEE-729-83 Помилка (error) - це',
        answer: [
            'стан програми, при якому видаються неправильні результати, причиною яких є вади в операторах програми або в технологічному процесі її розробки'
        ]
    },
    {
        question: 'Відповідно до міжнародного стандарту ANSI / IEEE-729-83 дефект (fault) - це',
        answer: [
            'наслідок помилок розробника на будь-якому з етапів розробки, яка може міститися в початкових або проектних специфікаціях, текстах кодів програм, експлуатаційної документації та тп'
        ]
    },
    {
        question: 'Відповідно до міжнародного стандарту ANSI / IEEE-729-83 Відмова (failure) - це',
        answer: [
            'відхилення програми від функціонування або неможливість програми виконувати функції, визначені вимогами і обмеженнями'
        ]
    },
    {
        question: `В обов'язки інженера-тестувальника входять`,
        answer: [
            'оцінка тестів',
            'створення тестових сценаріїв',
            'складання плану тесту'
        ]
    },
    {
        question: `В обов'язки інженера-тестувальника не включаються`,
        answer: [
            'виправлення помилок, виявлених на етапі тестування'
        ]
    },
    {
        question: 'RUP (Rational Unified Process) - це',
        answer: [
            'керівництво роботами команди виконавців проекту для реалізації проекту з використанням методів керування, планування і контролю робіт'
        ]
    },
    {
        question: 'Модель процесу розробки програмного забезпечення - це',
        answer: [
            'модель, яка визначає структуру процесів і керівництво ними протягом усього часу життя проекту'
        ]
    },
    {
        question: 'Модель керування ризиками - це',
        answer: [
            'модель, за допомогою якої визначається порядок і умови реалізації превентивних рішень і заходів щодо виявлення найбільш істотних моментів ризику'
        ]
    },
    {
        question: 'Модель процесу проектування - це',
        answer: [
            'модель, яка визначає цілі та завдання процесу розробки виробничої архітектури з паралельним і ітераційним виконанням окремих робіт'
        ]
    },
    {
        question: 'Модель проектної групи - це',
        answer: [
            `модель, яка визначає ролі, обов'язки кожного учасника проекту і розподіл між ними відповідальності`
        ]
    },
    {
        question: 'Реінженерія - це',
        answer: [
            'удосконалення застарілого ПЗ шляхом його реорганізації або реструктуризації, а також перепрограмування окремих елементів або настроювання параметрів на іншу платформу, середовище виконання зі збереженням зручності його супроводу'
        ]
    },
    {
        question: 'Рефакторинг - це',
        answer: [
            'перетворення програмного коду, зміна внутрішньої структури програмного забезпечення для полегшення розуміння коду і легшого внесення подальших змін без зміни зовнішньої поведінки самої системи'
        ]
    },
    {
        question: 'Причини, що вимагають перетворення вихідного коду програм в іншу мову, можуть бути',
        answer: [
            'оновлення платформи апаратних засобів, на якій може не виконуватися компілятор мови програмування',
            'недолік кваліфікованого персоналу для програм, написаних в мові програмування, що вийшли з ужитку'
        ]
    },
    {
        question: 'Операції рефакторінгу над компонентами задовольняють умовам',
        answer: [
            'написання системної специфікації починається не з "нуля", а з розгляду можливостей старої успадковане системи',
            'операція не змінює функціональність компонента і новий компонент може застосовуватися в раніше побудованих компонентних системах'
        ]
    },
    {
        question: 'Вимоги - це',
        answer: [
            'властивості, якими має володіти ПО для адекватного визначення функцій, умов і обмежень виконання програмного забезпечення, а також обсягів даних, технічного забезпечення та середовища функціонування'
        ]
    },
    {
        question: 'Процес перевірки правильності специфікацій вимог на їх відповідність, несуперечність, повноту і здійсненність, а також на відповідність стандартам - це',
        answer: [
            'верифікація вимог'
        ]
    },
    {
        question: 'Інженерія вимог',
        answer: [
            'Виявлення, аналіз, специфікація, перевірка потреб користувача, або властивостей розроблюваного ПЗ'
        ]
    },
    {
        question: 'Проектування',
        answer: [
            'Процес визначення архітектури, складу компонентів, інтерфейсів та інших характеристик до системи.'
        ]
    },
    {
        question: 'Конструювання',
        answer: [
            'Кодування, модульне та інтеграційне тестування, відлагодження.'
        ]
    },
    {
        question: 'Тестування',
        answer: [
            'Перевірка поведінки системи на відповідність до специфікації, пошук дефектів.'
        ]
    },
    {
        question: 'Супровід програмного забезпечення',
        answer: [
            'Поліпшення, оптимізація системи та процесів роботи з нею після вводу до експлуатації.'
        ]
    },
    {
        question: 'Тестування ефективності програмного забезпечення дозволяє перевірити',
        answer: [
            'продуктивність',
            'максимально допустиме навантаження',
            'максимальний обсяг даних'
        ]
    },
    {
        question: 'Тестування ефективності програмного забезпечення не дозволяє перевірити',
        answer: [
            'роботу системи на різних конфігураціях апаратури'
        ]
    },
    {
        question: 'Чим вважається супровід відповідно до стандартів ISO / IEC 12207 та ISO / IEC 14764',
        answer: [
            'модифікацією програмного продукту в процесі експлуатації за умови збереження цілісності продукту'
        ]
    },
    {
        question: 'Реорганізація коду для поліпшення характеристик і показників якості програм без зміни їх поведінки - це',
        answer: [
            'рефакторинг'
        ]
    },
    {
        question: 'Збірка програмного забезпечення - це',
        answer: [
            `об'єднання коректних елементів програмного забезпечення і конфігураційних даних в єдину виконувану програму`
        ]
    },
    {
        question: 'Якість програмного забезпечення - це',
        answer: [
            'набір властивостей продукту, які характеризують його здатність задовольнити встановлені або передбачувані потреби замовника'
        ]
    },
    {
        question: '',
        answer: [
            '',
            ''
        ]
    },
    {
        question: 'До характеристик якості програмного забезпечення відносять',
        answer: [
            'ефективність',
            'надійність',
            'переносимість'
        ]
    },
    {
        question: 'Діяльності і техніки гарантії якості програмного забезпечення включають',
        answer: [
            'інспекцію програмного забезпечення',
            'валідацію програмного забезпечення'
        ]
    },
    {
        question: 'Життєвий цикл програмної системи - це',
        answer: [
            'певна послідовність процесів (етапів), починаючи від постановки задачі до її втілення в готову програму, експлуатації та вилучення з експлуатації'
        ]
    }, {
        question: `Головна мета об'єктного аналізу - це`,
        answer: [
            `представити предметну область як множину об'єктів з властивостями і характеристиками, які є достатніми для їх визначення і ідентифікації, а також для завдання поведінки об'єктів в рамках обраної системи понять і абстракцій`
        ]
    }, {
        question: 'Завдання проектування - це',
        answer: [
            'побудова архітектури системи'
        ]
    }, {
        question: 'Архітектура системи - це',
        answer: [
            'структурна схема компонентів системи, що взаємодіють між собою через інтерфейси'
        ]
    },
    {
        question: 'Умови побудови архітектури системи включають в себе',
        answer: [
            'декомпозиція системи на компоненти або модулі',
            'ієрархічне уявлення абстракції системи і приховування тих деталей, які будуть відпрацьовані на наступних рівнях'
        ]
    },
    {
        question: `Вимоги, що пред'являються до якості програмного забезпечення, ставляться відповідно до`,
        answer: [
            'умов застосування',
            'складності вирішуваних завдань'
        ]
    },
    {
        question: 'Функціональність - це',
        answer: [
            'сукупність властивостей, що визначають здатність програмного забезпечення виконувати певний перелік функцій, які задовольняють потребам відповідно до призначення'
        ]
    },
    {
        question: 'Надійність - це',
        answer: [
            'група властивостей, що обумовлює здатність програмного забезпечення зберігати працездатність і перетворювати вихідні дані в результат за встановлений період часу, характер відмов якого є наслідком внутрішніх дефектів і умов його застосування'
        ]
    },
    {
        question: 'Зручність застосування - це',
        answer: [
            'сукупність властивостей програмного забезпечення для передбачуваного кола користувачів і відображають легкість його освоєння і адаптації до постійно змінюваних умов експлуатації, стабільність роботи і підготовки даних, зрозумілість результатів, зручності внесення змін до програмної документацію і в програми'
        ]
    },
    {
        question: 'Супроводжуванність - це',
        answer: [
            'група властивостей, що характеризує можливість програмного забезпечення бути модифікованим для його виправлення, поліпшення або адаптації ПЗ до зміни в середовищі, вимогах або функціональних специфікаціях'
        ]
    }, {
        question: 'Раціональність (ефективність) - це',
        answer: [
            'група властивостей, що характеризується ступенем відповідності використовуваних ресурсів середовища функціонування рівню якості (надійності) функціонування програмного забезпечення при заданих умовах застосування'
        ]
    }, {
        question: 'Переносимість - це',
        answer: [
            'група властивостей програмного забезпечення, що забезпечує його пристосованість для перенесення з одного середовища функціонування в інші, зусилля для перенесення і адаптацію програмного забезпечення до нового середовища функціонування'
        ]
    },
    {
        question: 'До складових надійності програмного забезпечення не належить',
        answer: [
            'функціональна повнота'
        ]
    },
    {
        question: 'До складових надійності програмного забезпечення відносяться',
        answer: [
            'безвідмовність',
            'стійкість до помилок',
            'відновлюванність'
        ]
    },
    {
        question: 'Досягнення надійності програмного забезпечення забезпечується',
        answer: [
            'запобіганням відмови',
            'усуненням відмови',
            'оцінкою можливості появи нових відмов і заходів боротьби з ними'
        ]
    },
    {
        question: 'Метрики програмного продукту включають',
        answer: [
            'зовнішні метрики, що позначають властивості продукту, видимі користувачеві',
            'внутрішні метрики, що позначають властивості, видимі тільки команді розробників'
        ]
    },
    {
        question: 'Внутрішні метрики продукту включають',
        answer: [
            'метрики розміру',
            'метрики складності програми'
        ]
    }, {
        question: 'Зовнішні метрики продукту включають',
        answer: [
            'метрики надійності',
            'метрики зручності застосування'
        ]
    }, {
        question: 'Напрацювання на відмову як атрибут надійності визначає',
        answer: [
            'середній час між появою загроз'
        ]
    },
    {
        question: 'При підході, орієнтованому на продукт, оцінка якості проводиться після випробування програмних систем. Цей підхід базується на припущенні, що',
        answer: [
            'чим більше виявлено та усунуто помилок в процесі випробування продукту, тим вище його якість'
        ]
    }, {
        question: 'Інженерія якості - це',
        answer: [
            'набір організаційних структур, методик, заходів, процесів і ресурсів для здійснення керування якістю'
        ]
    }, {
        question: 'Планування якості являє собою',
        answer: [
            'діяльність, спрямовану на визначення цілей і вимог до якості'
        ]
    }, {
        question: 'Програмні системи слід відносити до класу',
        answer: [
            'систем, що самовідновлюються'
        ]
    },
    {
        question: 'Інтенсивність відмов - це',
        answer: [
            'частота появи відмов або дефектів в програмних системах при їх тестуванні або експлуатації'
        ]
    },
    {
        question: 'Абстрагування - це',
        answer: [
            'виділення істотних аспектів системи і відволікання від несуттєвих'
        ]
    },
    {
        question: 'Сутність структурного підходу до розробки програмних систем - це',
        answer: [
            'декомпозиція (розбиття) системи на функції, які в свою чергу діляться на підфункції, на завдання і так далі'
        ]
    },
    {
        question: `Об'єктно-орієнтований підхід (ООП) - це`,
        answer: [
            `стратегія розробки, в рамках якої розробники системи замість операцій і функцій мислять об'єктами`
        ]
    },

  /**
   *
   *
   *
   *
   *
   *
   * Data Base
   *
   *
   *
   */

  {
    question: 'Виберіть визначення 2-ої нормальної форми',
    answer: [
      'відношення знаходиться в 2-йнормальной формі, якщо воно знаходиться в 1-ій нормальній формі і немає функціональних залежностей між неключових атрибутами і частини первинного ключа'
    ]
  },
  {
    question: 'Виберіть конструкції мови PL / SQL, які не є циклами',
    answer: [
      'IF … THEN … END IF',
      'SELECT … INTO … FROM …'
    ]
  },
  {
    question: 'Виберіть приклади команди SELECT, в яких правильно були використані агрегатні функції',
    answer: [
      'Select AVG(ocenka) from Students',
      'Select COUNT(DISTINCT group_number) from Student',
      'Select group_number from Student group by group_number having AVG(ocenka) > 35'
    ]
  },
  {
    question: 'Виберіть правильні визначення змінних типу запис в мові PL / SQL',
    answer: [
      'FOR VAR2 IN CURSOR1 LOOP … END LOOP',
      'DECLARE VAR4 SGROUP%ROWTYPE',
      'TYPE P IS RECORD (subject VARCHAR2 (22),sport VARCHAR2 (22)); MyPref P;'
    ]
  },
  {
    question: 'Виберіть ключі таблиці, які можна оголосити в одній таблиці більш ніж один раз',
    answer: [
      'UNIQUE',
      'FOREIGN KEY'
    ]
  },
  {
    question: 'Виберіть правильні визначення ключів таблиці, вся команда Create table повинна бути правильною',
    answer: [
      'Create table B(a1 integer, b1 integer references A(a2), PRIMARY KEY(a1,b1))',
      'Create table D(d1 CHAR(10), d2 VARCHAR(5), PRIMARY KEY(d1,d2))'
    ]
  },
  {
    question: 'Виберіть події, на які може реагувати тригер PL / SQL',
    answer: [
      'до виконання команди Insert into',
      'після команди Update'
    ]
  },
  {
    question: 'Виберіть з нижче наведених запитів той, який містить пов’язаний (корельований) запит',
    answer: [
      'Select * from Student a where avg_ocenka > (Select AVG(avg_ocenka) from Student b where a.group_number = b.group_number)'
    ]
  },
  {
    question: 'Скільки разів виконується пов’язаний (корельований) підзапит для непорожньої таблиці',
    answer: [
      'стільки разів, скільки рядків перегляне зовнішній запит'
    ]
  },
  {
    question: 'Які з нижче перерахованих назв є підмовою мови SQL',
    answer: [
      'DML',
      'DDL'
    ]
  },
  {
    question: 'SELECT * FROM Student GROUP BY student_id ORDER BY student_id',
    answer: [
      'помилка між ключовими словами SELECT і FROM'
    ]
  },
  {
    question: 'SELECT * FROM Student GROUP BY group_id ORDER BY group_id',
    answer: [
      'помилка між ключовими словами SELECT і FROM'
    ]
  },
  {
    question: 'SELECT group_id FROM Student WHERE COUNT(student_id) > 5 GROUP BY group_id',
    answer: [
      'помилка після ключового слова WHERE'
    ]
  },
  {
    question: 'SELECT group_name FROM SGroup WHERE group_id IN (SELECT group_id FROM Student GROUP BY group_id HAVING COUNT(student_id) > 5 ORDER BY group_id)',
    answer: [
      'помилка після ключового слова WHERE'
    ]
  },
  {
    question: 'SELECT group_id FROM Student GROUP BY group_id HAVING COUNT(student_id) > 5 ORDER BY group_id',
    answer: [
      'помилки в запиті немає'
    ]
  },
  {
    question: 'SELECT student_id, group_id FROM Student st, SGroup gr WHERE st.group_id = gr.group_id',
    answer: [
      'помилка SELECT student_id, group_id'
    ]
  },
  {
    question: 'SELECT firstname, groupname FROM SGroup gr INNER JOIN Student as st ON Group.group_id = Student.group_id;',
    answer: [
      'ошибка INNER JOIN'
    ]
  },
  {
    question: 'SELECT student_id FROM Student WHERE ocenka = (SELECT ocenka FROM Student WHERE group_id = 101)',
    answer: [
      'помилка WHERE ocenka = ('
    ]
  },
  {
    question: 'SELECT student_id FROM Student WHERE ocenka = (SELECT MAX(ocenka) FROM Student WHERE group_id = 101)',
    answer: [
      'помилки в запиті немає'
    ]
  },
  {
    question: 'UPDATE TABLE Student SET ocenka = 4 WHERE student_id = 7',
    answer: [
      'помилка UPDATE TABLE Student'
    ]
  },
  {
    question: 'CREATE TABLE Student ( student_id integer PRIMARY KEY, group_id integer REFERENCES Group (group_id), Fio varchar(100) UNIQUE KEY, ocenka float, CHECK(ocenka BETWEEN 3 AND 5))',
    answer: [
      'помилка Fio varchar(100) UNIQUE KEY'
    ]
  },

 /**
   *
   *
   *
   *
   *
   *
   * Software Architecture
   *
   *
   *
   */

  {
    question: 'Ефективність застосування багатопоточності полягає',
    answer: [
      'в поділі завдань за пріоритетами',
      'у виконанні тривалих завдань у фоновому режимі'
    ]
  },
  {
    question: 'Гарна архітектура програмного забезпечення повинна',
    answer: [
      'розкривати структуру системи',
      'реалізовувати всі варіанти використання і сценарії',
      'по можливості відповідати всім вимогам різних зацікавлених сторін',
      'виконувати вимоги, як по функціональності, так і за якістю'
    ]
  },
  {
    question: 'До основних принципів проектування архітектури ПЗ відносяться',
    answer: [
      `принцип поділу функціональності для забезпечення високої зв'язність і слабкої залежності`,
      'принцип єдності відповідальності',
      'принцип мінімального знання',
      'мінімізація попереднього проектування'
    ]
  },
  {
    question: 'Двійкова серіализація дозволяє',
    answer: [
      `перетворення стану об'єкта в форму, придатну для збереження або передачі`,
      'зберігати вірність типів',
      `застосовувати віддалену передачу об'єктів "за значенням"`
    ]
  },
  {
    question: 'Основна мета дисципліни програмної архітектури є',
    answer: [
      'зниження складності системи шляхом абстракції і розмежування повноважень'
    ]
  },
  {
    question: 'Стандартна XML серіализація дозволяє',
    answer: [
      `перетворити стан об'єкта в форму, придатну для збереження або передачі`,
      'використовувати тільки відкриті властивості і поля'
    ]
  },
  {
    question: 'Стандартна JSON серіализація дозволяє',
    answer: [
      `перетворити стан об'єкта в форму, придатну для збереження або передачі`,
      'використовувати тільки відкриті властивості і поля'
    ]
  },
  {
    question: 'Вкажіть коректні правила іменування для XML Element',
    answer: [
      `ім'я тегу має починатися з букви або символу підкреслення`,
      `ім'я тегу не може починатися з рядка «xml» в будь-якому регістрі`
    ]
  },
  {
    question: 'Вкажіть коректні правила іменування для атрибутів XML Element',
    answer: [
      `ім'я атрибута повинно починатися з букви або символу підкреслення`,
      `ім'я атрибута не може починатися з рядка «xml» в будь-якому регістрі`
    ]
  },
  {
    question: 'Вкажіть правильний синтаксис для XML Element',
    answer: [
      '<Tag * [attribName = "value"]> body </ tag>',
      '<Tag * [attribName = "value"] />'
    ]
  },
  {
    question: 'В COM-технології для забезпечення коректної взаємодії многопоточного клієнта і однопотокового сервера використовують', // error
    answer: [
      'апартменти (apartments)'
    ]
  },
  {
    question: 'В COM-технології інформація про місцезнаходження COM-сервера знаходиться',
    answer: [
      'в реєстрі операційної системи'
    ]
  },
  {
    question: 'В COM-технології маршалінга (marshaling) використовується для', // error
    answer: [
      'упаковки і розпаковування параметрів методів під час виклику методу через кордони процесу'
    ]
  },
  {
    question: 'Якщо застосування використовує COM-сервер, реалізований у вигляді DLL то це дозволяє',
    answer: [
      `зменшити накладні витрати на виклик методів COM-об'єкта`
    ]
  },
  {
    question: 'Якщо застосування використовує COM-сервер, реалізований у вигляді EXE то це дозволяє',
    answer: [
      'збільшити надійність застосування'
    ]
  },
  {
    question: 'До поведінкових шаблонах (Behavioral design patterns) відносяться', // error
    answer: [
      'Спостерігач (Observer)',
    ]
  },
  {
    question: 'До породжує шаблонами (Creational design patterns) відносяться', // error
    answer: [
      'Відкладене ініціалізація (Lazy initialization)'
    ]
  },
  {
    question: 'До структурних шаблонах (Structural design patterns) відносяться', // error
    answer: [
      'Шаблон Фасад (Facade)'
    ]
  },
  {
    question: 'До шаблонами паралельного програмування (Concurrency design patterns) відносяться', // error
    answer: [
      'Блокування з подвійною перевіркою (Double-checked locking)'
    ]
  },
  {
    question: 'За допомогою шаблонів проектування',
    answer: [
      'забезпечують загальний (уніфікований) словник предметної області',
      'спрощується документування архітектури ПО',
      'розглядають проблему на абстрактному рівні',
      'виділяють важливі частини архітектури в компактній формі'
    ]
  },
  {
    question: `Шаблони проектування, які абстрагують процес створення екземпляра класу і дозволяють зробити систему незалежною від способу створення, композиції та представлення об'єктів відносяться до`,
    answer: [
      'породжуючими шаблонами (Creational design patterns)'
    ]
  },
  {
    question: `Шаблони проектування, які визначають взаємодію між об'єктами, збільшуючи таким чином його гнучкість відносяться до`,
    answer: [
      'поведінковим шаблонами (Behavioral design patterns)'
    ]
  },
  {
    question: `Шаблони проектування, які визначають різні складні структури, які змінюють інтерфейс вже існуючих об'єктів або його реалізацію, дозволяючи полегшити розробку і оптимізувати програму відносяться до`,
    answer: [
      'структурним шаблонами (Structural design patterns)'
    ]
  },
  {
    question: 'Вкажіть анти-патерн використання одного шаблону для вирішення всіх можливих і неможливих завдань',
    answer: [
      'Golden hammer'
    ]
  },
  {
    question: 'Вкажіть анти-патерн змішання рівня бізнес-логіки та інтерфейсу',
    answer: [
      'Magic pushbutton'
    ]
  }
];
