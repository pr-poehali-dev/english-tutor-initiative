import { useState } from "react";
import Icon from "@/components/ui/icon";

const TUTOR_PHOTO = "https://cdn.poehali.dev/projects/5b72bbdf-4aa5-4256-8212-b4f247a55cbd/bucket/f7019797-d937-490c-8ec1-f9439e76f273.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "О мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Цены", href: "#prices" },
  { label: "Расписание", href: "#schedule" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const PRICES = [
  { title: "Английский язык", price: "1700–2000", note: "индивидуально", color: "from-blue-700 to-blue-900", hot: false },
  { title: "ЕГЭ по английскому", price: "1800", note: "60 мин.", color: "from-red-600 to-red-800", hot: true },
  { title: "ОГЭ по английскому", price: "1700", note: "60 мин.", color: "from-red-500 to-red-700", hot: false },
  { title: "Международные экзамены (IELTS, TOEFL)", price: "1800", note: "60 мин.", color: "from-blue-600 to-blue-800", hot: false },
  { title: "Английский для младших школьников", price: "1500", note: "60 мин.", color: "from-blue-500 to-indigo-700", hot: false },
  { title: "Дистанционные занятия для детей", price: "1300", note: "60 мин.", color: "from-indigo-600 to-blue-800", hot: false },
  { title: "Занятия в паре", price: "1700", note: "60 мин. / чел.", color: "from-red-700 to-rose-800", hot: false },
  { title: "Групповые занятия", price: "900", note: "60 мин. · группа 3 чел.", color: "from-blue-800 to-indigo-900", hot: false },
];

const SERVICES = [
  {
    icon: "FileCheck",
    title: "IELTS и TOEFL",
    desc: "Подготовка к международным экзаменам с нуля до результата.",
    color: "from-blue-700 to-blue-900",
    tag: "Хит",
  },
  {
    icon: "GraduationCap",
    title: "ЕГЭ, ОГЭ и ВПР",
    desc: "Авторский ускоренный курс — ученики поступают куда планировали.",
    color: "from-red-600 to-red-800",
    tag: "",
  },
  {
    icon: "School",
    title: "Успеваемость в учёбе",
    desc: "Помогу подтянуть школьный или университетский английский.",
    color: "from-blue-600 to-indigo-700",
    tag: "",
  },
  {
    icon: "MessageCircle",
    title: "Разговорный английский",
    desc: "Снятие языкового барьера, разговорный интенсив, живая речь.",
    color: "from-blue-500 to-blue-700",
    tag: "",
  },
  {
    icon: "Baby",
    title: "Английский для малышей",
    desc: "Игровой формат для детей — первые слова и любовь к языку.",
    color: "from-red-500 to-red-700",
    tag: "",
  },
  {
    icon: "Plane",
    title: "Туристический английский",
    desc: "Минимум за минимальный срок — всё необходимое для поездки.",
    color: "from-red-700 to-blue-800",
    tag: "",
  },
];

const REVIEWS = [
  {
    name: "Мария",
    date: "октябрь 2024",
    service: "Английский язык",
    text: "Всё отлично. Ребёнку занятия нравятся, занимается больше месяца. Анастасия Андреевна очень приятна в общении, ответственный педагог, подробно сообщает о проделанной работе на уроках.",
    stars: 5,
    avatar: "🌟",
  },
  {
    name: "Инна",
    date: "февраль 2024",
    service: "Английский язык",
    text: "Выражаю огромную благодарность Анастасии Андреевне. Сына увлёк английский, с удовольствием выполняет задания. До этого невозможно было заставить учить уроки. Спасибо большое!",
    stars: 5,
    avatar: "✨",
  },
  {
    name: "Марина",
    date: "февраль 2024",
    service: "Английский язык",
    text: "Ребёнку понравился педагог. Всё чётко по делу, честная обратная связь.",
    stars: 5,
    avatar: "💛",
  },
  {
    name: "Татьяна Борисова",
    date: "февраль 2024",
    service: "Английский язык",
    text: "Очень хорошая и общительная. Будем работать и дальше. Ребёнок тоже остался доволен.",
    stars: 5,
    avatar: "🌸",
  },
  {
    name: "Виктория",
    date: "март 2023",
    service: "Английский для дошкольников",
    text: "Анастасия Андреевна, спасибо за проведённый урок — всё прошло отлично! Будем продолжать занятия с вами.",
    stars: 5,
    avatar: "🚀",
  },
  {
    name: "Ярослав",
    date: "октябрь 2022",
    service: "Английский язык",
    text: "Знакомство с педагогом произвело приятное впечатление — полное объяснение всех материалов на занятии, ребёнок доволен, будем продолжать. Спасибо большое!",
    stars: 5,
    avatar: "🎯",
  },
];

const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const TIMES = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:30", "20:00"];

const FREE_SLOTS: Record<string, string[]> = {
  "Пн": ["09:00", "12:00", "17:00"],
  "Вт": ["10:30", "15:30", "18:30"],
  "Ср": ["09:00", "14:00", "20:00"],
  "Чт": ["12:00", "17:00"],
  "Пт": ["10:30", "14:00", "18:30"],
  "Сб": ["09:00", "10:30", "12:00", "14:00"],
  "Вс": [],
};

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", subject: "" });
  const [bookingDone, setBookingDone] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingDone(true);
  };

  const freeSlots = selectedDay ? FREE_SLOTS[selectedDay] || [] : [];

  return (
    <div className="min-h-screen bg-[#FAFAF8] overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-cormorant text-2xl font-bold gradient-text">
            Знания<span className="text-foreground">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a href="#schedule" className="hidden md:inline-flex btn-primary px-5 py-2.5 text-sm">
            Записаться
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-black/5 transition"
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden glass border-t border-white/30 px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium py-2 border-b border-black/5"
              >
                {l.label}
              </a>
            ))}
            <a href="#schedule" onClick={() => setMenuOpen(false)} className="btn-primary text-center px-5 py-3 mt-2">
              Записаться
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="blob absolute w-[600px] h-[600px] -top-32 -right-48 opacity-20"
            style={{ background: "linear-gradient(135deg, #CF142B, #00247D)" }}
          />
          <div
            className="blob-2 absolute w-[400px] h-[400px] bottom-0 -left-32 opacity-15"
            style={{ background: "linear-gradient(135deg, #00247D, #1d4ed8)" }}
          />
          <div className="absolute top-1/3 left-1/2 w-3 h-3 rounded-full bg-red-500 animate-float-slow opacity-60" />
          <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-blue-800 animate-float opacity-50" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full border-2 border-red-600 animate-float-slow opacity-40" style={{ animationDelay: "1s" }} />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#000" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse inline-block" />
              Запись открыта
            </div>

            <h1 className="font-cormorant text-6xl md:text-7xl font-bold leading-tight mb-6">
              Учиться —
              <br />
              <span className="gradient-text italic">это круто.</span>
            </h1>

            <p className="text-lg text-foreground/65 leading-relaxed mb-8 max-w-md font-golos">
              Индивидуальные занятия с опытным репетитором. Подготовка к ЕГЭ, ОГЭ и олимпиадам. Результат — гарантирован.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#schedule" className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2">
                <Icon name="CalendarCheck" size={18} />
                Записаться на урок
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-foreground/15 hover:border-foreground/30 font-semibold text-base transition-all"
              >
                Узнать больше
              </a>
            </div>

            <div className="flex gap-8 mt-12">
              {[
                { num: "20", label: "лет опыта" },
                { num: "200+", label: "учеников" },
                { num: "94%", label: "сдают на 4 и 5" },
              ].map((s) => (
                <div key={s.num}>
                  <div className="font-cormorant text-3xl font-bold gradient-text">{s.num}</div>
                  <div className="text-sm text-foreground/50 font-golos">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-400 to-pink-500 opacity-20 animate-pulse scale-105" />
              <div className="absolute -inset-4 rounded-[2.5rem] border-2 border-orange-300/30 animate-pulse" style={{ animationDelay: "1s" }} />
              <img
                src={TUTOR_PHOTO}
                alt="Репетитор"
                className="relative w-80 h-96 object-cover rounded-3xl shadow-2xl"
                style={{ objectPosition: "center top" }}
              />
              <div className="glass absolute -left-8 top-12 px-4 py-3 rounded-2xl shadow-lg animate-float">
                <div className="text-xs text-foreground/50 font-golos">Следующий урок</div>
                <div className="font-semibold text-sm mt-0.5">Сегодня в 15:30</div>
              </div>
              <div className="glass absolute -right-8 bottom-16 px-4 py-3 rounded-2xl shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <div className="font-bold text-lg leading-none">5,0</div>
                    <div className="text-xs text-foreground/50 font-golos">рейтинг</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="text-xs font-golos">листайте вниз</div>
          <Icon name="ChevronDown" size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-72 h-72 blob opacity-10" style={{ background: "linear-gradient(135deg, #00247D, #1d4ed8)" }} />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square max-w-sm mx-auto relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-100 to-cyan-100" />
              <div className="absolute inset-4 rounded-2xl overflow-hidden">
                <img src={TUTOR_PHOTO} alt="О репетиторе" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass px-5 py-4 rounded-2xl shadow-xl">
                <div className="text-3xl mb-1">🏆</div>
                <div className="font-semibold text-sm">CAE Cambridge</div>
                <div className="text-xs text-foreground/50 font-golos">оценка A, 2012 год</div>
              </div>
              <div className="absolute -top-6 -left-6 glass px-5 py-4 rounded-2xl shadow-xl">
                <div className="text-3xl mb-1">🎓</div>
                <div className="font-semibold text-sm">Лингвист-переводчик</div>
                <div className="text-xs text-foreground/50 font-golos">2 высших образования</div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-200 text-violet-600 text-sm font-medium mb-6">
              <Icon name="User" size={14} />
              О репетиторе
            </div>
            <h2 className="section-title text-5xl font-bold mb-6 leading-tight">
              Меня зовут<br />
              <span className="gradient-text-2">Анастасия Андреевна</span>
            </h2>
            <p className="text-foreground/65 leading-relaxed mb-4 font-golos">
              Репетитор по английскому языку с 20-летним стажем. Разработала авторский ускоренный курс подготовки к ЕГЭ и ОГЭ — мои ученики прекрасно сдают экзамены и поступают именно туда, куда планировали.
            </p>
            <p className="text-foreground/65 leading-relaxed mb-4 font-golos">
              Составляю индивидуальную программу под вашу конкретную цель. В процессе обучения помогаю разговориться и снять языковой барьер, вспомнить забытое, пополнить лексику, структурировать грамматику и лучше понимать речь на слух.
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {[
                { year: "2007–2012", org: "Московский государственный открытый университет", spec: "Лингвист, переводчик" },
                { year: "до 2014", org: "Московский институт лингвистики", spec: "Преподаватель (учитель) английского языка" },
                { year: "до 2017", org: "Московская международная академия и издательство «Макмиллан»", spec: "Повышение квалификации: подготовка учащихся к ЕГЭ" },
              ].map((edu) => (
                <div key={edu.org} className="flex gap-3 p-3 rounded-xl bg-white border border-black/5">
                  <div className="flex-shrink-0 px-2 py-1 rounded-lg bg-violet-50 text-violet-600 text-xs font-semibold font-golos whitespace-nowrap h-fit mt-0.5">
                    {edu.year}
                  </div>
                  <div>
                    <div className="text-sm font-medium leading-snug">{edu.org}</div>
                    <div className="text-xs text-foreground/50 font-golos mt-0.5">{edu.spec}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "GraduationCap", text: "2 высших образования" },
                { icon: "Medal", text: "20 лет репетиторства" },
                { icon: "Award", text: "CAE Cambridge — оценка A" },
                { icon: "TrendingUp", text: "Авторский курс ЕГЭ/ОГЭ" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-black/5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={16} className="text-orange-500" />
                  </div>
                  <span className="text-sm font-medium font-golos">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-gradient-to-b from-[#FAFAF8] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-sm font-medium mb-6">
              <Icon name="Sparkles" size={14} />
              Направления обучения
            </div>
            <h2 className="section-title text-5xl font-bold mb-4">
              Что я <span className="gradient-text">преподаю</span>
            </h2>
            <p className="text-foreground/55 max-w-xl mx-auto font-golos">
              Каждое направление — авторская программа, адаптированная под ваши цели и темп обучения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="card-hover relative bg-white rounded-3xl p-6 border border-black/5 overflow-hidden group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${s.color}`} />
                {s.tag && (
                  <div className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-600">
                    {s.tag}
                  </div>
                )}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon name={s.icon} size={22} className="text-white" />
                </div>
                <h3 className="font-cormorant text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed font-golos mb-5">{s.desc}</p>
                <a
                  href="#schedule"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:gap-3 transition-all"
                >
                  Записаться <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 bg-gradient-to-b from-white to-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-sm font-medium mb-6">
              <Icon name="Wallet" size={14} />
              Цены
            </div>
            <h2 className="section-title text-5xl font-bold mb-4">
              Стоимость <span className="gradient-text">занятий</span>
            </h2>
            <p className="text-foreground/55 max-w-xl mx-auto font-golos">
              Первое занятие — бесплатная диагностика знаний. Далее индивидуальная программа по фиксированной цене.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {PRICES.map((p) => (
              <div key={p.title} className="card-hover relative bg-white rounded-3xl p-5 border border-black/5 overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${p.color}`} />
                {p.hot && (
                  <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-600">
                    Хит
                  </div>
                )}
                <div className="mt-1 mb-3">
                  <div className="font-cormorant text-3xl font-bold gradient-text leading-none">
                    {p.price} <span className="text-xl">₽</span>
                  </div>
                  <div className="text-xs text-foreground/45 font-golos mt-1">{p.note}</div>
                </div>
                <div className="text-sm font-medium text-foreground/80 font-golos leading-snug">{p.title}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-violet-50 to-cyan-50 rounded-3xl p-6 border border-violet-100 flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Gift" size={22} className="text-white" />
              </div>
              <div>
                <div className="font-semibold">Первое занятие — бесплатная диагностика</div>
                <div className="text-sm text-foreground/55 font-golos">Определим уровень, цель и составим программу</div>
              </div>
            </div>
            <a href="#schedule" className="btn-primary px-6 py-3 text-sm whitespace-nowrap flex items-center gap-2 flex-shrink-0">
              <Icon name="CalendarCheck" size={16} />
              Записаться бесплатно
            </a>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-cyan-50 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 blob opacity-10" style={{ background: "linear-gradient(135deg, #F7630C, #8B5CF6)" }} />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-600 text-sm font-medium mb-6">
              <Icon name="Calendar" size={14} />
              Запись на занятия
            </div>
            <h2 className="section-title text-5xl font-bold mb-4">
              Выберите <span className="gradient-text-2">удобное время</span>
            </h2>
            <p className="text-foreground/55 max-w-xl mx-auto font-golos">
              Занятия длятся 60 минут. Выберите день и доступный слот — и я свяжусь с вами для подтверждения
            </p>
          </div>

          {bookingDone ? (
            <div className="max-w-md mx-auto text-center py-16">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-200">
                <Icon name="CheckCheck" size={36} className="text-white" />
              </div>
              <h3 className="font-cormorant text-3xl font-bold mb-3">Заявка отправлена!</h3>
              <p className="text-foreground/60 font-golos mb-8">
                {formData.name}, я свяжусь с вами по номеру {formData.phone} для подтверждения занятия в {selectedDay} в {selectedTime}.
              </p>
              <button
                onClick={() => { setBookingDone(false); setSelectedDay(""); setSelectedTime(""); setFormData({ name: "", phone: "", subject: "" }); }}
                className="btn-primary px-6 py-3 text-sm"
              >
                Записаться ещё раз
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-sm">
                <h3 className="font-cormorant text-2xl font-semibold mb-5">Доступные дни</h3>
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {DAYS.map((day) => (
                    <button
                      key={day}
                      onClick={() => { setSelectedDay(day); setSelectedTime(""); }}
                      disabled={FREE_SLOTS[day]?.length === 0}
                      className={`aspect-square rounded-2xl flex flex-col items-center justify-center text-sm font-semibold transition-all font-golos
                        ${day === "Вс" ? "opacity-30 cursor-not-allowed bg-gray-50" : ""}
                        ${selectedDay === day
                          ? "bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-lg scale-105"
                          : day !== "Вс" ? "hover:bg-orange-50 border border-transparent hover:border-orange-200" : ""
                        }
                      `}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                {selectedDay ? (
                  <div>
                    <div className="text-sm text-foreground/50 mb-3 font-golos">Слоты на {selectedDay}:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {TIMES.map((time) => {
                        const isFree = freeSlots.includes(time);
                        return (
                          <button
                            key={time}
                            disabled={!isFree}
                            onClick={() => isFree && setSelectedTime(time)}
                            className={`py-3 rounded-xl text-sm font-semibold transition-all font-golos
                              ${!isFree ? "bg-gray-50 text-gray-300 cursor-not-allowed" : ""}
                              ${selectedTime === time && isFree
                                ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-md"
                                : isFree ? "bg-violet-50 text-violet-700 hover:bg-violet-100 border border-violet-100" : ""
                              }
                            `}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-foreground/30 font-golos text-sm">
                    Выберите день, чтобы увидеть доступные слоты
                  </div>
                )}
              </div>

              <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-sm">
                <h3 className="font-cormorant text-2xl font-semibold mb-2">Ваши данные</h3>
                {selectedDay && selectedTime ? (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-600 text-xs font-medium mb-5">
                    <Icon name="Clock" size={12} />
                    {selectedDay}, {selectedTime}
                  </div>
                ) : (
                  <p className="text-sm text-foreground/40 mb-5 font-golos">Сначала выберите день и время</p>
                )}

                <form onSubmit={handleBook} className="flex flex-col gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground/70 mb-1.5 block font-golos">Ваше имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Как вас зовут?"
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition font-golos text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/70 mb-1.5 block font-golos">Номер телефона</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={formData.phone}
                      onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition font-golos text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/70 mb-1.5 block font-golos">Предмет</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition font-golos text-sm bg-white"
                    >
                      <option value="">Выберите направление</option>
                      <option>IELTS / TOEFL</option>
                      <option>ЕГЭ по английскому</option>
                      <option>ОГЭ по английскому</option>
                      <option>ВПР</option>
                      <option>Разговорный английский</option>
                      <option>Английский для малышей</option>
                      <option>Туристический английский</option>
                      <option>Успеваемость в школе/университете</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={!selectedDay || !selectedTime}
                    className="btn-primary py-4 text-base mt-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center justify-center gap-2"
                  >
                    <Icon name="Send" size={16} />
                    Отправить заявку
                  </button>
                </form>

                <p className="text-xs text-foreground/35 mt-4 text-center font-golos">
                  Я отвечу в течение 2 часов в рабочее время
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-gradient-to-b from-white to-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-500 text-sm font-medium mb-6">
              <Icon name="Heart" size={14} />
              Отзывы учеников
            </div>
            <h2 className="section-title text-5xl font-bold mb-6">
              Что говорят <span className="gradient-text">ученики</span>
            </h2>
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="font-cormorant text-5xl font-bold gradient-text leading-none">5,0</div>
                <div className="flex gap-1 justify-center mt-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
                <div className="text-xs text-foreground/45 font-golos mt-1">средняя оценка</div>
              </div>
              <div className="w-px h-12 bg-black/10" />
              <div className="text-center">
                <div className="font-cormorant text-5xl font-bold gradient-text leading-none">41</div>
                <div className="text-xs text-foreground/45 font-golos mt-1">отзыв</div>
              </div>
              <div className="w-px h-12 bg-black/10" />
              <div className="text-center">
                <div className="font-cormorant text-5xl font-bold gradient-text leading-none">37</div>
                <div className="text-xs text-foreground/45 font-golos mt-1">оценок «5»</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="card-hover bg-white rounded-3xl p-7 border border-black/5 relative overflow-hidden">
                <div className="absolute top-4 right-6 font-cormorant text-8xl text-orange-100 font-bold leading-none select-none pointer-events-none">
                  "
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <span key={j} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-foreground/35 font-golos">{r.date}</span>
                </div>
                <div className="text-xs text-violet-500 font-medium font-golos mb-3 bg-violet-50 px-2 py-1 rounded-lg inline-block">
                  {r.service}
                </div>
                <p className="text-foreground/75 leading-relaxed font-golos mb-6 relative z-10">
                  «{r.text}»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center text-2xl">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-foreground/45 font-golos">проверенный отзыв</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 blob opacity-20" style={{ background: "linear-gradient(135deg, #F7630C, #EC4899)" }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 blob-2 opacity-15" style={{ background: "linear-gradient(135deg, #06B6D4, #8B5CF6)" }} />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-6">
              <Icon name="MessageCircle" size={14} />
              Контакты
            </div>
            <h2 className="section-title text-5xl font-bold text-white mb-4">
              Остались<br />
              <span className="gradient-text">вопросы?</span>
            </h2>
            <p className="text-white/50 max-w-md mx-auto font-golos">
              Напишите мне в любой из мессенджеров или позвоните — отвечаю быстро
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              {
                icon: "Phone",
                label: "Телефон",
                value: "+7 (903) 019-48-63",
                href: "tel:+79030194863",
                color: "from-orange-400 to-pink-500",
              },
              {
                icon: "MessageCircle",
                label: "Telegram",
                value: "@EnglishNekrasovka",
                href: "https://t.me/EnglishNekrasovka",
                color: "from-cyan-400 to-blue-500",
              },
              {
                icon: "Mail",
                label: "Email",
                value: "whimsicalgirl@mail.ru",
                href: "mailto:whimsicalgirl@mail.ru",
                color: "from-violet-400 to-purple-600",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group glass bg-white/5 hover:bg-white/10 rounded-3xl p-6 flex flex-col items-center text-center transition-all hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon name={c.icon} size={24} className="text-white" />
                </div>
                <div className="text-white/50 text-sm mb-1 font-golos">{c.label}</div>
                <div className="text-white font-semibold font-golos">{c.value}</div>
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
            {[
              {
                icon: "Home",
                title: "Приём у себя",
                desc: "Проспект Защитников Москвы, Москва",
                color: "from-orange-400 to-pink-500",
              },
              {
                icon: "Monitor",
                title: "Онлайн",
                desc: "Занятия дистанционно — из любой точки мира",
                color: "from-violet-400 to-indigo-500",
              },
              {
                icon: "MapPin",
                title: "Выезд к ученику",
                desc: "Москва — уточните район при записи",
                color: "from-cyan-400 to-teal-500",
              },
            ].map((f) => (
              <div key={f.title} className="glass bg-white/5 rounded-2xl p-5 flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon name={f.icon} size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">{f.title}</div>
                  <div className="text-white/50 text-xs font-golos leading-snug">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            {[
              { icon: "Instagram", label: "Instagram" },
              { icon: "Youtube", label: "YouTube" },
              { icon: "Send", label: "Telegram" },
            ].map((s) => (
              <button
                key={s.label}
                className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 text-white/60 hover:text-white"
              >
                <Icon name={s.icon} size={20} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-8 px-6 text-center">
        <div className="font-cormorant text-2xl font-bold gradient-text mb-2">Знания.</div>
        <p className="text-white/25 text-sm font-golos">
          © 2024 Анастасия Андреевна · Репетитор · Все права защищены
        </p>
      </footer>
    </div>
  );
}