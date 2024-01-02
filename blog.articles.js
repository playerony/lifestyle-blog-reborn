const articles = [
  {
    title: "Nie słuchałem muzyki przez miesiąc",
    fileName: "5c9c1c7f-1cab-426c-a8a6-67b2aa8ae988.md",
    description: "Słuchałem muzyki od zawsze. Czy to będąc na spacerze, czytając, medytując, pracując, trenując, gotując czy kąpiąc się. Na każdą okazję była osobna playlista. Jednak w pewnym momencie zadałem sobie następujące pytanie: jak zmieniłoby się moje życie gdybym z tego zrezygnował? Wszystko zbiegło się w czasie z moim wyjazdem na wakacje, który co roku stanowi dla mnie formę resetu w jakimś wybranym obszarze życia. Postanowiłem podjąć wyzwanie.",
    createdAt: "2020-12-01",
    tags: ["Psychologia", "Styl życia"],
  },
  {
    title: "Dlaczego zaprzestałem oglądania TV, czytania gazet i słuchania radia?",
    fileName: "eb507281-9971-4580-a3ac-e027785eeca4.md",
    description: "Nie oglądam telewizji. Nie czytam gazet. Nie słucham radia. Od samego początku byłem do tego sceptycznie nastawiony. Co sobie ludzie pomyślą? Czy nie potraktują mnie jako wyrzutka i kolejnego społecznego świra? Te myśli często przeszywały moją głowę. Dzisiaj mijają trzy lata od kiedy nie śledzę rzeczy wymienionych w tytule. Dziś mogę z pełnym przekonaniem powiedzieć, że to jedna z najlepszych decyzji, jakie podjąłem w życiu.",
    createdAt: "2020-11-24",
    tags: ["Psychologia", "Styl życia"],
  },
  {
    title: "Zasada trzech lat",
    fileName: "69a7646c-443c-4aa2-8cff-a831f473f9b4.md",
    description: "Zauważyłem wśród ludzi pewną zależność jeżeli chodzi o rozwijanie swoich przedsięwzięć. Czy to w kontekście budowy nowych nawyków, nowego biznesu czy jakieś nowej relacji. Mianowicie chodzi o dość szybką rezygnację spowodowaną głównie brakiem spodziewanych efektów. Choć w przypadku wprowadzania nowych nawyków jest to głównie ciekawość przetestowania czegoś głównie przez okres jednego miesiąca.",
    createdAt: "2020-11-17",
    tags: ["Psychologia", "Styl życia"],
  },
  {
    title: "Jak krytyka innych ludzi zniszczyła moje życie?",
    fileName: "58af9c9e-6259-49fd-88a5-67534c6330ad.md",
    description: "Od kiedy sięgnę swoją pamięcią to w sumie od zawsze byłem krytykowany. Już w przedszkolu zaczynając mówić później niż inni byłem narażony na odrzucenie. Wydaje mi się, że mogę śmiało stwierdzić, że stanowiło to pierwsze symptomy krytyki. Oczywiście nie słowne, bo raczej jest to trudne na tym etapie. Jednakże jako taki zalążek wyniszczania mnie, jak najbardziej.",
    createdAt: "2020-11-10",
    tags: ["Psychologia"],
  },
  {
    title: "Jak radzę sobie z niepokojem?",
    fileName: "2c25144f-0366-446b-91c3-aeeaca1986b4.md",
    description: "Zastanawiając się nad tym czym jest niepokój. To pierwszym co mi przyszło w związku z tym do głowy to fakt, że jest to coś co towarzyszyło mi od zawsze. Czy to przed jakąś kartkówką w szkole, przed wyjściem na randkę czy przed pierwszym pójściem na siłownię samemu. Przykładów można by było tutaj mnożyć setki jak nie tysiące. Niektóre z nich mijają wraz z wiekiem jednak lwia część z nich nadal z nami pozostaje.",
    createdAt: "2020-11-03",
    tags: ["Psychologia", "Emocje"],
  },
  {
    title: "Dlaczego nie zmienisz nikogo na siłę?",
    fileName: "f7d044bd-49fa-43ed-8927-db9127b9b35a.md",
    description: "Wydaje mi się, że każdy z nas kiedyś chciał w jakiś sposób poprawić życie drugiej osoby. Czy to swojej drugiej połówki, przyjaciela w potrzebie, a na członkach swojej rodziny kończąc. Ba, nawet pragnę rzec, że mnie też to spotkało setki razy. Nie jestem tutaj wyjątkiem w żadnym bądź razie. Jednak większości z tych rad nigdy nie wdrożyłem. Chociaż przyznam, że ostatnio zacząłem analizować pewne propozycje od osób, które posiadają wysoką samoświadomość w moim mniemaniu. Co oczywiście nie oznacza, że wprowadzam daną zmianę w ułamku sekundy.",
    createdAt: "2020-10-20",
    tags: ["Emocje"],
  },
  {
    title: "Społeczna definicja \"sukcesu\" jest kłamstwem",
    fileName: "8f80eb5f-c676-4c3f-beb7-5fdc282ddae1.md",
    description: "Jest to jeden z najciekawszych tematów nad którymi przyszło mi pracować od dłuższego czasu. Nie chciałbym oczywiście zabrzmieć jako osoba, która zna definitywną odpowiedź na to czym jest sukces. Ale jako ktoś kto potrafi wysuwać wnioski na podstawie swoich doświadczeń jak i tych od innych ludzi. Wydaje mi się, że mogę śmiało podjąć próbę opisania tego tematu.",
    createdAt: "2020-10-06",
    tags: ["Psychologia", "Styl życia"],
  },
  {
    title: "Jak wybaczyć komuś, kogo nienawidzisz?",
    fileName: "9bf1b2c8-2f6e-4f5a-9661-38802a9818b2.md",
    description: "Temat wybaczania wydaje mi się jedną z trudniejszych umiejętności do utrzymania jak i nauczenia się. W moim wypadku wyglądało to tak, że wielokrotnie wydawało mi się, że komuś wybaczyłem coś. Żeby potem znowu żywić do tej osoby nienawiść. Jednakże myślę, że teraz już w pełni udało mi się posiąść tę umiejętność. Pytałem też kilku moich znajomych o ich spostrzeżenia. ",
    createdAt: "2020-09-29",
    tags: ["Medytacja", "Psychologia", "Emocje"],
  },
  {
    title: "Jak sobie radzę z wyzwalaczami emocjonalnymi?",
    fileName: "24556c5c-3529-4fbe-97e7-cdc8fdd8b2ca.md",
    description: "Chciałbym na samym początku zaznaczyć, że będę tutaj bazować na swoich własnych doświadczeniach. Każdy z nas ma inny bagaż doświadczeń życiowych. Dla każdego z nas emocjonalne wyzwalacze mogą występować w różnych życiowych sytuacjach. Jedni z nas są na nie bardziej przewrażliwieni, a inni mniej. Ja to rozumiem. Myślę, że to chyba tyle w roli wstępu.",
    createdAt: "2020-09-22",
    tags: ["Medytacja", "Emocje"],
  },
  {
    title: "Jak radzę sobie z lękami z dzieciństwa?",
    fileName: "46a19946-c5ea-4d91-9ba5-a4bd01900b8c.md",
    description: "Prawdopodobnie dla większość z was ten artykuł będzie nieprzydatny, bądź niezrozumiały. Będę opisywać rzecz, która wydaje mi się, że nie przytrafia się większości z nas. Za to myślę, że osoby które doświadczyły czegoś złego w dzieciństwie. Jakieś prześladowań przemocy czy innych objawów wykorzystywania doskonale mnie zrozumieją. Pozwolę sobie wyjaśnić na początku termin ‘złe dzieciństwo’ na moim przykładzie.",
    createdAt: "2020-09-14",
    tags: ["Medytacja", "Psychologia", "Emocje"],
  },
  {
    title: "Czego nauczyło mnie toksyczne środowisko?",
    fileName: "3060c8fe-7612-4d68-ab72-09104e0fc8fb.md",
    description: "Jest to trudny do opisania temat ze względu na to, że każdy z nas ma inne doświadczenia. Dlatego tylko na wstępie chciałbym zaznaczyć, że nasze doświadczenia czy wnioski z sytuacji życiowych nie muszą być ze sobą w 100 procentach zgodne. Uważam jednak, że czytając ten artykuł, każdy powinien mieć to na uwadze. Czytasz to, ponieważ prawdopodobnie masz problemy z toksycznymi ludźmi w swoim środowisku. Całkowicie to rozumiem.",
    createdAt: "2020-09-07",
    tags: ["Psychologia", "Emocje"],
  },
  {
    title: "Dlaczego nie używam telefonu zaraz po przebudzeniu?",
    fileName: "056082a8-597c-4b19-8fae-13212e191aa0.md",
    description: "W dzisiejszych czasach, gdzie większość z nas jest przyklejona do ekranu swojego telefonu. Nawet nie zastanawiamy się jaki wpływ mają one na nasze życie, nasze ciała i galaretowatą masę zwaną mózgiem. Chciałbym dodać na wstępie, że generalnie rzecz biorąc to nie będę tutaj tylko poruszał tematu telefonu, ale też innych urządzeń elektronicznych takich jak komputery czy laptopy. Generalnie sprowadza się to wszystko do jednego. A mianowicie bombardowania swojego mózgu informacjami zaraz po przebudzeniu.",
    createdAt: "2020-10-27",
    tags: ["Psychologia", "Styl życia"],
  },
  {
    title: "Dla tych, którzy czują się zacofani w życiu",
    fileName: "1376e3c2-8eab-4b22-9259-3124cb8aea91.md",
    description: "Dużo myślałem o tym fenomenie poczucia opóźnienia w życiu. Sporządzenie notatek zajęło mi 5 dni, gdzie zwykle w tym samym momencie mam napisane już półtora artykułu. Jednak tym razem poświęciłem go tylko notatkom i sposobom wyjaśniania tego w najlepszy sposób. Zapewne dlatego, że te uczucie zacofania zakończyło się zaledwie kilka miesięcy temu. Zajęło mi to 24 lata. Dopiero teraz zacząłem zauważać, że decyzje, które podejmowałem w życiu, były tylko wyborami mojego otoczenia. W ogóle nie poprawiło to mojego stanu psychicznego. Obserwowanie mojego otoczenia, które nie miało tak przyziemnych problemów jak ja. Na przykład proste nawiązywanie kontaktów z innymi w szkole czy relacje z kobietami.",
    createdAt: "2020-08-10",
    tags: ["Psychologia", "Styl życia", "Emocje"],
  },
  {
    title: "Samotność w czasie lockdownu",
    fileName: "1404828f-708f-47ff-b3ea-70bad2a33e04.md",
    description: "Czas koronawirusa był i nadal jest w niektórych regionach naszego pięknego świata trudnym okresem dla wielu ludzi z wielu różnych powodów. U mnie chyba było trochę trudniej - tak mi się wydaję - z tego względu, że na miesiąc przed pojawieniem się koronki postanowiłem przenieść swoją dupę do Krakowa. Wyprowadziłem się z Gliwic - miejsca, w którym się wychowałem 100 kilometrów dalej, zostawiając przyjaciół i rodzinę. Postanowiłem nie wracać do czasu pojawienia się ewentualnej daty zablokowania transportu między miastami. Zostałem do dziś. Możesz powiedzieć - Kim Ty kurwa jesteś, około 200 milionów ludzi na świecie prawdopodobnie miało podobny problem. Spokojna twoja rozczochrana - szanuję twoją perspektywę. Przepraszam! To wydaje się oczywiste, ale o wiele mniej oczywistym jest fakt dotyczący tego jak sobie z tym wszystkim poradziłem.",
    createdAt: "2020-07-06",
    tags: ["Psychologia", "Styl życia", "Emocje"],
  },
  {
    title: "Jak radzę sobie w trudnych momentach?",
    fileName: "15a6ea90-b41a-47dd-b746-fea9e27cab5d.md",
    description: "W moim ostatnim artykule zatytułowanym „Dla tych, którzy nie chcą żyć” wspomniałem, że co roku 800.000 ludzi popełnia samobójstwo. Z pewnością co roku występuje tutaj trend wzrostowy. Co nie powinno napawać nas optymizmem. Tym bardziej patrząc na czasy i kolejne pokolenia, które już pojawiają się na naszych oczach. Jakaś część tych ludzi chce lub będzie chciała popełnić samobójstwo, ponieważ w pewnym momencie zdadzą sobie z tego sprawę, że zamiast spędzać czas z prawdziwymi przyjaciółmi. Woleli poprawiać swoje samopoczucie zabawnymi kotami na YouTube lub poprzez oglądanie swoich idoli na Instagramie. Boją się zmierzyć z prawdziwymi emocjami. Wzrost poczucia samotności wśród młodych ludzi jest już faktem, a czas spędzany przez nich w mediach społecznościowych oscyluje w granicach 6-8h dziennie. Czy to nie jest smutne? Prawdopodobnie skontaktują się z kimś prędzej za pomocą komunikatora, aniżeli fizycznie czy poprzez zwykłe wykonanie telefonu. Oczywiście nie generalizuję tutaj i nie próbuję umieszczać wszystkich w jednym worku. Broń boże. Po prostu zwracam uwagę na problem, który się pojawia, a o którym nie jest łatwo mówić. A samotność może być dla wielu najtrudniejszym czasem w ich życiu.",
    createdAt: "2020-06-29",
    tags: ["Medytacja", "Psychologia", "Sport"],
  },
  {
    title: "Dlaczego nie myślisz jasno?",
    fileName: "1b7e98bd-60ed-403c-a676-8b830de84ab5.md",
    description: "Zaczynając swoją przygodę z pisaniem artykułów. Poszukiwałam idealnego klucza ku temu, aby łączyć posiadaną wiedzę z życia. Tego czego nauczyła mnie moja trauma oraz towarzyszące jej skutki z informacjami, które przyswoiłem z książek czy to od innych ludzi posiadających w mojej opinii ten normalny punkt widzenia. Mam na myśli tutaj punkt widzenia osoby starszej - bardziej doświadczonej przez życie jak i tych których dzieciństwo powiedzmy, że nie przebiegało w książkowy sposób.",
    createdAt: "2020-10-13",
    tags: ["Psychologia", "Styl życia"],
  },
  {
    title: "Dlaczego ludzie nie rozumieją introwertyków?",
    fileName: "23987dbf-6d85-47a0-9131-a868d8d7b16f.md",
    description: "Wydaje mi się, że temat introwertyków jest bardzo niezrozumiały w naszym społeczeństwie. Kiedy spróbujemy poszukać definicji introwertyka w google. Natrafimy na wiele mylących informacji, więc myślę, że warto będzie zacząć od małego wyjaśnienia kim jest introwertyk. Przede wszystkim introwersja nie jest synonimem bycia społecznie niezręcznym. My po prostu lubimy spędzać więcej czasu w samotności, co niekoniecznie oznacza, że nie potrafimy rozmawiać czy komunikować jakieś swoich potrzeb. Nie jest to też synonim nieśmiałości, którą można definiować na wiele sposobów jako np. zdenerwowanie czy dyskomfort w towarzystwie innych ludzi bądź strach przed społecznym odrzuceniem. Najlepszą definicję dla introwertyzmu na jaką zdołałem natrafić pochodzi w oryginale od Susan King i mniej więcej mówi o tym, że introwertyk preferuje środowiska, które nie są nadmiernie stymulujące. W mojej opinii jako osoby, która uważa się za mocno introwertyczną nie tyle przez samego siebie, ale też przez swoje otoczenie. Uważam, że ta definicja idealnie oddaje istotę tego kim jest introwertyk. Co oczywiście nie zmienia faktu, że w słowniku nie znajdziemy takiej definicji. A to ani trochę nie przyczynia się ku temu, aby ludzie zaczęli rozumieć to kim tak naprawdę jest introwertyk.",
    createdAt: "2020-07-20",
    tags: ["Psychologia", "Emocje"],
  },
  {
    title: "Jak medytacja wpływa na produktywność?",
    fileName: "60dcb388-9b6c-4929-bd9b-1e51c57a87e3.md",
    description: "Ludzie spędzają większość swojego życia w pracy. Ponadto większość ludzi stresuje się swoją pracą, ponieważ ich menedżer wymaga za dużo lub coś w tym rodzaju. Mam nadzieję, że wiesz co mam na myśli. To nie jest nic fajnego, kiedy jesteśmy zestresowani swoją pracą. Jednak i tak wydaje mi się, że najgorszym jest, gdy przenosisz stres z pracy do swojego domu na członków swojej rodziny rodziny. Narzekając jaki to twój szef lub koledzy z pracy nie są źli i okrutni. Kto chciałby znać osobę, która wiecznie narzeka? W dzisiejszym artykule chciałbym podzielić się swoim doświadczeniem na temat tego, jak medytacja pozwoliła mi zacząć cieszyć się pracą oraz zwiększyć swoją produktywność\n",
    createdAt: "2020-06-18",
    tags: ["Medytacja", "Psychologia"],
  },
  {
    title: "Tekst o tym jak pozwolić życiu się znaleźć",
    fileName: "5c3cfbad-8a06-451f-9348-d4ac2acc6292.md",
    description: "Pamiętam jak byłem dzieckiem i poszedłem pewnego dnia z rodzicami do supermarketu. Było to na stoisku z zabawkami. Powiedzieli mi, że jeśli się zgubię, powinienem zostać tam, gdzie jestem. W sytuacji gdybym poszedł na jakieś spacer to nie byłoby problemu i moglibyśmy się odnaleźć. Wydaje mi się, że życie i możliwości, które dostajemy działają na tej samej zasadzie.",
    createdAt: "2020-12-08",
    tags: ["Psychologia", "Styl życia"],
  },
  {
    title: "Dlaczego medytacja mnie zraniła?",
    fileName: "b166024d-1ad4-41bd-8019-2e53107e164e.md",
    description: "Na początku chciałbym wspomnieć, że będę tutaj bazował na swoich własnych doświadczeniach związanych z medytacją. To nie będzie jakieś naukowe pierdolenie tylko opowieść na faktach. Myślę, że to pozwoli zwiększyć jasność mojego przekazu i pozwoli rozwiać jakieś wątpliwości, które mogą się pojawić w trakcie czytania.\n\n",
    createdAt: "2020-06-12",
    tags: ["Medytacja", "Psychologia", "Sport"],
  },
  {
    title: "Dla tych, którzy nie chcą żyć",
    fileName: "2c6af58d-66d2-4594-8c55-8900f6c84c92.md",
    description: "Na całym świecie co roku mniej więcej 800.000 ludzi popełnia samobójstwo. Co 40 sekund jedna osoba odbiera sobie życie. W Polsce z kolei codziennie popełnia samobójstwo 15 osób. To więcej aniżeli w skutek malarii, raka piersi czy morderstw o których możemy dosyć często słyszeć w mediach. Większość z nich robi to z powodu problemów psychicznych, ale są ludzie, którzy robią to z powodu stresu czy problemów rodzinnych. W Polsce mamy jeden z najwyższych wskaźników samobójstw w Europie w grupie dzieci i młodzieży. Co raczej nie powinno być żadnym powodem do dumy.",
    createdAt: "2020-06-24",
    tags: ["Psychologia"],
  },
  {
    title: "Czego nauczyła mnie deskorolka?",
    fileName: "a810582d-458a-4f3d-bfb6-34db5a96d1bc.md",
    description: "Kiedy patrzysz na osobę, która przejeżdża na deskorolce przed tobą, prawdopodobnie myślisz jak większość: „Izi jak jebanie”. Wystarczy jednak na niej stanąć, a na 90% twojego dupsko znajdzie się na chodniku. Zakład? Zdumiewające jest to, że pewne rzeczy zaczynamy postrzegać inaczej kiedy sami je wypróbujemy. W roli wyjaśnienia nie jestem nawet tak dobry z moimi umiejętnościami deskorolkowymi jak Carlos Lastra czy Andrew Schrock. Z przyjemnością patrzę na to co robią na tym pieprzonym kawałku drewna z czterema kołami. Nie do wiary! Dla mnie deskorolka stanowi bardziej formę spełnienia kolejnego marzenia z dzieciństwa. Aniżeli umiejętność w której chciałbym osiągnąć mistrzowski poziom. Jednak nigdy wcześniej nie było ku temu okazji, chęci czy funduszy. Mam nadzieję, że wiesz co mam na myśli.",
    createdAt: "2020-07-13",
    tags: ["Psychologia", "Sport"],
  },
  {
    title: "Post dopaminowy",
    fileName: "a45b3ef3-8055-4805-be4a-a0f0d56ba667.md",
    description: "Każdy z nas chce czuć się dobrze, czy to w złych chwilach czy to w momencie kiedy chcemy wypełnić pustkę po jakimś nagłym, ale szczęśliwym dla nas wydarzeniu. Temu nie zaprzeczysz. Napędza to wiele mechanizmów w naszym społeczeństwie. Sprawia, że firmy stają się bogate, mogą rozwiązywać relacje i mogą być motywacją do dokonywania wyborów w życiu. Trenujemy coś, jemy słodycze, które poza cukrem nic nam nie dają, przeglądamy internet czy to w poszukiwaniu informacji czy po prostu scrollując tablicę na facebooku i można by wymieniać i wymieniać. Nasz mózg przez to nas wynagradza - coś podobnego jak tresowanie psa za pomocą jego ulubionego żarcia. Zrobisz coś - a może filmik na YouTube w nagrodę sobie odpalisz? Niestety tak to działa, ale też jak zdajesz sobie z tego sprawę to możesz wykorzystać tę wiedzę do wypracowywania w sobie nawyków. Pracowałeś przez 30 minut? To może żelek w nagrodę bądź filmik.",
    createdAt: "2020-07-27",
    tags: ["Psychologia", "Styl życia"],
  },
  {
    title: "Zdejmij maskę i stań oko w oko z prawdą",
    fileName: "2a77c03f-28a3-40c3-8275-b2deb293ed8a.md",
    description: "Osobiście nie znam osoby, która byłaby w 100% szczera. Wszyscy kłamią. Ja też. Nie wiem dlaczego, ale dorastając, zacząłem zauważać, że mam tendencję ku temu aby zawyżać wielkość swoich osiągnięć. Ale myślę, że to nie tylko ja. To coś w rodzaju Halloween, które nigdy się nie kończy. Albo w sumie mam lepszy pomysł. Pewnie kojarzysz takie maski, które często kojarzone są z teatrem. Jedna z nich jest uśmiechnięta, a druga smutna.  W sumie teraz pomyślałem, że normalnie życie wiedzie się jak jakieś teatr. Na jakiejś gigantycznej scenie. Wyjście z niego jest cholernie trudne, gdyż się w nim rodzisz. Ale zobrazuj sobie to, że garstce osób udaje się z tego wydostać. Osoby te żyją szczerze ze sobą, może w odczuciu ludzi biorących udział w spektaklu są samotni - co w ich mniemaniu oznacza nieszczęście. Jednakże Ci ludzie dostają bilet, którego większość nigdy nawet nie zobaczy.",
    createdAt: "2020-08-04",
    tags: ["Styl życia", "Emocje"],
  },
  {
    title: "Dlaczego nie daje pieniędzy bezdomnym?",
    fileName: "70b41135-fe6f-4b9c-9f07-90b30779fd6f.md",
    description: "Wydaje mi się, że dzisiejszy artykuł może wywołać jakieś nieporozumienie. Dlatego chciałbym zaznaczyć, że przedstawię tutaj tylko i wyłącznie mój punkt widzenia. Mówimy, że opinia jest jak odbyt - każdy ma swój. I niech tak pozostanie. Myślę, że najlepszym sposobem na przedstawienie tego zdarzenia jakim niewątpliwie jest pomoc bezdomnemu, będzie rozbicie tej sytuacji na dwa czynniki. Dwie osobne historie. Moją - jako osoby, która chce pomóc osobie będącej w jakimś ewidentnym życiowym dołku, a właśnie wspomnianej już osobie bezdomnej.",
    createdAt: "2020-08-17",
    tags: ["Psychologia", "Styl życia"],
  },
  {
    title: "Co mi dało pisanie notatek przez pół roku?",
    fileName: "57011527-d48e-4044-893d-21c2bec004cb.md",
    description: "Niesamowitym dla mnie jest fakt, że piszę artykuł o pisaniu notatek. W życiu nigdy bym nie pomyślał, że w ogóle to będę robić. A tym bardziej nieprzerwanie przez pół roku. Dzień po dniu. Zawsze postrzegałem pisanie notatek jako stratę czasu. Przecież wszystko mam w swojej głowie a też nikt nie widzi moich myśli. Genialne! Robiłem coś takiego. Brzmi pojebanie, ale tak było. Myślałem, że pisanie notatek to totalna strata czasu. W końcu pisanie notatek jest staromodne. Kto to robi? Okazało się, że bardzo się myliłem, dopóki nie zacząłem mieć problemów z zarządzaniem dużą ilością zadań.",
    createdAt: "2020-08-24",
    tags: ["Styl życia", "Czytanie"],
  },
  {
    title: "Co robię, kiedy ktoś mnie denerwuje?",
    fileName: "aca93dea-5a8e-4183-9e82-5cb66b20a3fb.md",
    description: "W okresie kwarantanny zauważyłem, że większość ludzi wokół mnie irytuje lub denerwuje. Zauważyłem, że odczuwam znacznie mniejszy stres podczas okresu zamknięcia. Pewnego dnia myślałem nad tym trochę więcej i doszedłem do wniosku, że znaczna część mojego stresu pochodzi z relacji z innymi ludźmi. Na szczęście mam bezpośrednie znajomości, które dają mi nadzieję, że nie jestem psychopatą. Pozwala mi to podzielić ludzi, z którymi się spotykam, na dwie kategorie. Ludzi z którymi super mi się rozmawia i ludzie, którzy mnie denerwują.",
    createdAt: "2020-08-31",
    tags: ["Psychologia", "Styl życia", "Emocje"],
  },
  {
    title: "Kiedy gaśnie światło",
    fileName: "5d28c45b-83ee-45cb-a1b0-4c75bf4213b6.md",
    description: "Utwór zainspirowany obrazem \"Smutek gasnącego dnia\" autorstwa Łukasza Korolkiewicza. Opowiadający o dorastającym samotnym dziecku i jego wewnętrznych konfliktach. Tych egzystencjalnych jak i emocjonalnych.",
    createdAt: "2023-11-27",
    tags: ["Muzyka"],
  }
];
