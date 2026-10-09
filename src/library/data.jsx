import ModelObject from "../component/3dViewPage/3d/ModelObject";
import { GiResize } from "react-icons/gi";
export const timeTags = [
  {
    id: crypto.randomUUID(),
    tagImgUrl: "/img/timeline/bm-13.jpg",
    tagTimeStart: new Date("1941-06-17"),
    tagTimeStart: new Date("1941-06-21"),
    tagTitle: "Принятие на вооружение БМ-13(«Катюша»)",
    tagText: `За день до начала войны ГКО принял на вооружение легендарную реактивную систему залпового огня БМ-13. 
              «Катюша» стала одним из самых эффективных и узнаваемых видов оружия ВОВ, сочетавшим высокую мобильность и огромную разрушительную силу.`,
  },
  {
    id: crypto.randomUUID(),
    tagImgUrl: "/img/timeline/svarka.jpg",
    tagTimeStart: new Date("1941-12-18"),
    tagTimeStart: new Date("1941-12-18"),
    tagTitle: "Внедрение автосварки брони (Метод Патона)",
    tagText: `Академик Евгений Патон разработал и внедрил на Уралвагонзаводе технологию автоматической сварки танковой брони под флюсом. Это решение позволило в 8 раз ускорить сборку корпусов Т-34 и существенно повысить прочность сварных швов.`,
  },
  {
    id: crypto.randomUUID(),
    tagImgUrl: "/img/timeline/t-34-85.jpg",
    tagTimeStart: new Date("1944-01-23"),
    tagTimeStart: new Date("1944-01-23"),
    tagTitle: "Выпуск модернизированного Т-34-85",
    tagText: `Модернизация позволила пробивать броню тяжелых немецких танков «Тигр» и «Пантера» на дальних дистанциях, а выделение отдельного наводчика существенно повысило скорострельность машины.`,
  },
  {
    id: crypto.randomUUID(),
    tagImgUrl: "/img/timeline/penicilin.jpg",
    tagTimeStart: new Date("1942-06-16"),
    tagTimeStart: new Date("1942-06-20"),
    tagTitle: "Создание советского пенициллина (Крустозина)",
    tagText: `Советские ученые получили первый отечественный антибиотик - Крустозин. Препарат спас сотни тысяч солдат от гангрены, заражения крови и тяжелых инфекций в фронтовых госпиталях.`,
  },
  {
    id: crypto.randomUUID(),
    tagImgUrl: "/img/timeline/colossus.jpg",
    tagTimeStart: new Date("1944-01-18"),
    tagTimeStart: new Date("1944-01-23"),
    tagTitle: "ЭВМ «Колосс» (Colossus Mk 1)",
    tagText: `В британском криптографическом центре Блечли-парк запущен «Колосс» - первый в мире компьютер. Машина предназначалась для автоматического взлома сложнейших немецких шифров, что дало союзникам прямую информацию о планах высшего командования вермахта.`,
  },

  {
    id: crypto.randomUUID(),
    tagImgUrl: "/img/timeline/rocket.jpg",
    tagTimeStart: new Date("1942-10-01"),
    tagTimeStart: new Date("1942-10-03"),
    tagTitle: "Первый баллистический пуск фау-2 (V-2)",
    tagText: `С немецкого полигона Пенемюнде успешно стартовала ракета V-2, разработанная под руководством Вернера фон Брауна. Этот пуск положил начало эре баллистического оружия и открыл путь к освоению космоса.`,
  },
  {
    id: crypto.randomUUID(),
    tagImgUrl: "/img/timeline/nuclear.jpg",
    tagTimeStart: new Date("1942-09-27"),
    tagTimeStart: new Date("1942-09-29"),
    tagTitle: "Старт советского атомного проекта",
    tagText: `Государственный комитет обороны СССР принял секретное постановление «Об организации работ по урану». Документ официально дал старт масштабной научно-технической программе по созданию советского атомного оружия.`,
  },
  {
    id: crypto.randomUUID(),
    tagImgUrl: "/img/timeline/aqualang.jpg",
    tagTimeStart: new Date("1943-02-20"),
    tagTimeStart: new Date("1943-02-20"),
    tagTitle: "Первое успешное испытание акваланга",
    tagText: `Французский морской офицер Жак-Ив Кусто и инженер Эмиль Ганьян разработали и успешно протестировали первый в мире акваланг. Регулятор давления автоматически подавал воздух из баллонов только при вдохе, что позволило человеку свободно передвигаться и дышать под водой без связи с поверхностью.`,
  },
  {
    id: crypto.randomUUID(),
    tagImgUrl: "/img/timeline/reactor.jpg",
    tagTimeStart: new Date("1943-02-20"),
    tagTimeStart: new Date("1943-02-20"),
    tagTitle: "Первый искусственный ядерный реактор",
    tagText: `Под трибунами заброшенного стадиона Чикагского университета группа физиков под руководством Энрико Ферми осуществила первую в истории управляемую цепную ядерную реакцию. Реактор Chicago Pile-1 (CP-1) был собран вручную из графитовых блоков, урановых брикетов и оксида урана без системы охлаждения и радиационной защиты. Эксперимент доказал практическую возможность использования ядерной энергии.`,
  },
];

export const modelsList = [
  {
    title: 'T-34-85',
    path: '/models/t-34-85.glb',
    model: ModelObject,
    info: [
      {
        title: 'Size',
        content: '240x240x240',
        icon: () => <GiResize />,
      },
      {
        title: 'Size',
        content: '240x240x240',
        icon: () => <GiResize />,
      },
      {
        title: 'Size',
        content: '240x240x240',
        icon: () => <GiResize />,
      },
      {
        title: 'Size',
        content: '240x240x240',
        icon: () => <GiResize />,
      },
      {
        title: 'Size',
        content: '240x240x240',
        icon: () => <GiResize />,
      }
    ],
  },
  {
    title: 'Hello, World!',
    path: '/models/t-34-85.glb',
    model: ModelObject,
    info: [
      {
        title: 'Size',
        content: '24x240x240',
        icon: () => <GiResize />,
      },
      {
        title: 'Size',
        content: '240x24990x240',
        icon: () => <GiResize />,
      },
      {
        title: 'Size',
        content: '240x240x240',
        icon: () => <GiResize />,
      },
      {
        title: 'Size',
        content: '240x240x240',
        icon: () => <GiResize />,
      },
      {
        title: 'Size',
        content: '240x240x240',
        icon: () => <GiResize />,
      }
    ],
  },
];




export const personsList = [
  {
    image: null,
    id: crypto.randomUUID(),
    name: 'Ivan Ivanovich',
    about: 'Like drawing',
    life: '1999-1999',
    place: 'Poland/Minsk',
    contribution: ['jjjj', 'kkkkk', 'mmmmmmm'],
    info: [
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },

      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
    ]
  },
  {
    image: null,
    id: crypto.randomUUID(),
    name: 'Ivan Ivanovich',
    about: 'Like drawing',
    life: '1999-1999',
    place: 'Poland/Minsk',
    contribution: ['jjjj', 'kkkkk', 'mmmmmmm'],
    info: [
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },

      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
    ]
  },
  {
    image: null,
    id: crypto.randomUUID(),
    name: 'Ivan Ivanovich',
    about: 'Like drawing',
    life: '1999-1999',
    place: 'Poland/Minsk',
    contribution: ['jjjj', 'kkkkk', 'mmmmmmm'],
    info: [
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },

      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
    ]
  },
  {
    image: null,
    id: crypto.randomUUID(),
    name: 'Ivan Ivanovich',
    about: 'Like drawing',
    life: '1999-1999',
    place: 'Poland/Minsk',
    contribution: ['jjjj', 'kkkkk', 'mmmmmmm'],
    info: [
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },

      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
    ]
  },
  {
    image: null,
    id: crypto.randomUUID(),
    name: 'Ivan Ivanovich',
    about: 'Like drawing',
    life: '1999-1999',
    place: 'Poland/Minsk',
    contribution: ['jjjj', 'kkkkk', 'mmmmmmm'],
    info: [
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },

      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
    ]
  },
  {
    image: null,
    id: crypto.randomUUID(),
    name: 'Ivan Ivanovich',
    about: 'Like drawing',
    life: '1999-1999',
    place: 'Poland/Minsk',
    contribution: ['jjjj', 'kkkkk', 'mmmmmmm'],
    info: [
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },

      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
    ]
  },
  {
    image: null,
    id: crypto.randomUUID(),
    name: 'Ivan Ivanovich',
    about: 'Like drawing',
    life: '1999-1999',
    place: 'Poland/Minsk',
    contribution: ['jjjj', 'kkkkk', 'mmmmmmm'],
    info: [
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },

      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
    ]
  },
  {
    image: null,
    id: crypto.randomUUID(),
    name: 'Ivan Ivanovich',
    about: 'Like drawing',
    life: '1999-1999',
    place: 'Poland/Minsk',
    contribution: ['jjjj', 'kkkkk', 'mmmmmmm'],
    info: [
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },

      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
    ]
  },
  {
    image: null,
    id: crypto.randomUUID(),
    name: 'Ivan Ivanovich',
    about: 'Like drawing',
    life: '1999-1999',
    place: 'Poland/Minsk',
    contribution: ['jjjj', 'kkkkk', 'mmmmmmm'],
    info: [
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
      {
        title: "Start of lify",
        text: "In the start of he was great"
      },

      {
        title: "Start of lify",
        text: "In the start of he was great"
      },
    ]
  },
]