import { useState } from "react";
import Icon from "@/components/ui/icon";

const TUTOR_PHOTO = "https://cdn.poehali.dev/projects/5b72bbdf-4aa5-4256-8212-b4f247a55cbd/files/df5ba0b4-45a6-4a82-a020-944d26a09a3a.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "О мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Расписание", href: "#schedule" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Globe",
    title: "Английский язык",
    desc: "Разговорный, грамматика, подготовка к IELTS и ЕГЭ.",
    color: "from-violet-500 to-indigo-500",
    tag: "",
  },
];

const REVIEWS = [
  {
    name: "Анна К.",
    role: "Мама ученика, 9 класс",
    text: "Сын сдал ОГЭ по математике на 5! Ещё полгода назад боялся контрольных. Огромное спасибо за терпение и профессионализм.",
    stars: 5,
    avatar: "🌟",
  },
  {
    name: "Дмитрий Р.",
    role: "Студент, 11 класс",
    text: "Готовился к ЕГЭ по физике за 3 месяца. Набрал 87 баллов — поступил в вуз мечты. Метод объяснения просто уникальный!",
    stars: 5,
    avatar: "🚀",
  },
  {
    name: "Елена М.",
    role: "Мама ученицы, 7 класс",
    text: "Дочка наконец-то полюбила английский. Занятия интересные, домашние задания выполняет с удовольствием.",
    stars: 5,
    avatar: "✨",
  },
  {
    name: "Михаил Д.",
    role: "Ученик, 10 класс",
    text: "Сложные задачи по химии теперь не пугают. Объяснения чёткие и логичные. Рекомендую всем!",
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
            style={{ background: "linear-gradient(135deg, #F7630C, #EC4899)" }}
          />
          <div
            className="blob-2 absolute w-[400px] h-[400px] bottom-0 -left-32 opacity-15"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)" }}
          />
          <div className="absolute top-1/3 left-1/2 w-3 h-3 rounded-full bg-amber-400 animate-float-slow opacity-60" />
          <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-violet-500 animate-float opacity-50" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full border-2 border-orange-400 animate-float-slow opacity-40" style={{ animationDelay: "1s" }} />
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
                { num: "8+", label: "лет опыта" },
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
                    <div className="font-bold text-lg leading-none">4.9</div>
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
        <div className="absolute right-0 top-0 w-72 h-72 blob opacity-10" style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)" }} />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square max-w-sm mx-auto relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-100 to-cyan-100" />
              <div className="absolute inset-4 rounded-2xl overflow-hidden">
                <img src={TUTOR_PHOTO} alt="О репетиторе" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass px-5 py-4 rounded-2xl shadow-xl">
                <div className="text-3xl mb-1">🏆</div>
                <div className="font-semibold text-sm">Лучший репетитор</div>
                <div className="text-xs text-foreground/50 font-golos">2023 года</div>
              </div>
              <div className="absolute -top-6 -left-6 glass px-5 py-4 rounded-2xl shadow-xl">
                <div className="text-3xl mb-1">🎓</div>
                <div className="font-semibold text-sm">МГУ, педагог</div>
                <div className="text-xs text-foreground/50 font-golos">высшее образование</div>
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
            <p className="text-foreground/65 leading-relaxed mb-6 font-golos">
              Я педагог с высшим образованием МГУ и 8-летним опытом работы с учениками от 7 до 18 лет. Специализируюсь на подготовке к ЕГЭ и ОГЭ по математике, физике и точным наукам.
            </p>
            <p className="text-foreground/65 leading-relaxed mb-8 font-golos">
              Мой подход — найти то, как именно ВАШ ребёнок воспринимает информацию, и выстроить программу под него. Никаких шаблонов — только результат.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "GraduationCap", text: "МГУ, педагогический" },
                { icon: "Medal", text: "8 лет репетиторства" },
                { icon: "Users", text: "200+ учеников" },
                { icon: "TrendingUp", text: "Рост оценок с 1 урока" },
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
                      <option value="">Выберите формат</option>
                      <option>Английский язык — разговорный</option>
                      <option>Английский язык — грамматика</option>
                      <option>Подготовка к ЕГЭ</option>
                      <option>Подготовка к IELTS</option>
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-500 text-sm font-medium mb-6">
              <Icon name="Heart" size={14} />
              Отзывы учеников
            </div>
            <h2 className="section-title text-5xl font-bold mb-4">
              Что говорят <span className="gradient-text">ученики</span>
            </h2>
            <p className="text-foreground/55 max-w-xl mx-auto font-golos">
              Результаты говорят сами за себя — реальные истории успеха
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="card-hover bg-white rounded-3xl p-7 border border-black/5 relative overflow-hidden">
                <div className="absolute top-4 right-6 font-cormorant text-8xl text-orange-100 font-bold leading-none select-none pointer-events-none">
                  "
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-lg">★</span>
                  ))}
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
                    <div className="text-xs text-foreground/45 font-golos">{r.role}</div>
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
                value: "+7 (999) 123-45-67",
                href: "tel:+79991234567",
                color: "from-orange-400 to-pink-500",
              },
              {
                icon: "MessageCircle",
                label: "Telegram",
                value: "@repetitor_anna",
                href: "https://t.me/repetitor_anna",
                color: "from-cyan-400 to-blue-500",
              },
              {
                icon: "Mail",
                label: "Email",
                value: "anna@repet.ru",
                href: "mailto:anna@repet.ru",
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

          <div className="flex justify-center gap-4 mt-12">
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