const allPayees = [
  '1Password',
  '50嵐',
  '591',
  '7-11',
  '76',
  '815 HOA',
  '85C Bakery Cafe',
  '99 Ranch',
  'AAA',
  'AAPL',
  'ACE Hardware',
  'ACN',
  'AMP',
  'AMT',
  'ANA',
  'APH',
  'ARCO',
  'ARKF',
  'ARKW',
  'AT&T',
  'AVIS',
  'Abrazo',
  'Aburaya',
  'Academy Express',
  'Acme Bread',
  'Adams Grub Truck',
  'Air Canada',
  'Air Mexico',
  'Airbnb',
  'Aji Limo Peruvian',
  'Akira Japanese Restaurant',
  'Alaska Airlines',
  'Algorand Inc',
  'Allbirds',
  'Ally',
  'Amami sushi Bistro SF',
  'Amazon',
  'Amazon.com',
  'Amazon.jp',
  'Amex',
  'Amex Saving',
  'Amex offer',
  'Amoura',
  'Anker',
  'Anu Island Soft Serve',
  'Anytime Kitchen',
  'Apizza',
  'Apple',
  'Apple Card',
  'Apple Saving',
  'Arizmendi Bakery',
  'Artesano',
  'Artifox',
  'Arty',
  'Asian Food Markets',
  'Assurant',
  'Athleta',
  'Audible',
  'Austrian Airlines',
  'Autonomous',
  'Avis',
  'Azure',
  'B & B Family Lavender Farm',
  'BA',
  'BOA',
  'BRKA',
  'Backhaus',
  'BadukPop',
  'Bandit',
  'Baoz',
  'Barclay',
  'Barclay Saving',
  'Bart',
  'Basa Seafood Express',
  'Basanova',
  'Base Camp',
  'BeFrugal',
  'Bed Bath & Beyond',
  'Beijing Tokyo Bistro',
  'Bellroy',
  'Ben Thai Cafe',
  'Bentocart',
  'Besfren',
  'BestBuy',
  'Beta 5 Chocolate',
  'Bi Rite Creamery',
  'Bibble & Sip',
  'Big Island Juice Company',
  'Big Sky Health',
  'Bilt',
  'Bimi Poke',
  'Bintang',
  'Bio Car Care',
  'Birdbox',
  'Birdsong',
  'Bistro Les Amis',
  'Black Hawk Bean and Cream',
  'Black Jet Baking Co.',
  'Blue Apron',
  'Blue Bottle',
  'Blue Bottle Coffee',
  'Blue Bottle Coffee ',
  'Bluestone Lane',
  'Blusston Lane',
  'Boba Bliss',
  'Boba Guys',
  'Bobbi Brown',
  'Bobbi Brown Cosmetics',
  'Bodega SF',
  'Boiling Hot Pot',
  'Bolt',
  'Bombas',
  'Bon Me',
  'Bosch',
  'Bottega',
  'Bottega90',
  'Bozzuto',
  'Brian Black Tea',
  'Bubble Queen',
  'Burgenstock Hotels',
  'Burger King',
  'Burma Love',
  'CD_09710LBB0',
  'CD_46656MA50',
  'CD_740367RS8',
  'CD_856285NA5',
  'CD_90953TCL6',
  'CD_94986T4W4',
  'CD_94986TK55',
  'CELFORD',
  'CIG',
  'CIT',
  'CL',
  'CLX',
  'CNN Stand',
  'CODI',
  "COFFEE LOVER's PLANET",
  'COIN',
  'COOP',
  'CPMC',
  'CPMC Mission Bernal Hospital',
  'CRM',
  'CVS',
  'Cafe Central',
  'Cafe China',
  'Cafe Mei',
  'Cafe Okawari',
  'Cafe Reveille',
  'Caffe Central',
  'Caffe Palermo',
  'Caitlin Wilson',
  'Calaca',
  'Calchip Connect',
  'Californios',
  'Canada',
  'Capilano Suspension Bridge',
  'Capital One',
  'Carmel Mission',
  "Carter's",
  "Casey's Pizza",
  'Castello di Amorosa',
  'Celsius',
  'ChaamLex',
  'Champa Garden',
  'Changsho',
  'Charles M. Schulz Museum ',
  'Charles Schwab',
  'Chase',
  'Chevron',
  'Chez Maman',
  "Chic n' Time",
  'Chick & Tea',
  'Chili',
  'China Bee',
  'Choice',
  'Choice Hotel',
  'Chong Qing Xiao Mian',
  'Choux',
  'Chukar Cherries',
  'Citi',
  'City Kebabs & Gyros',
  'Clark',
  'Clarks',
  'Club Monaco',
  'Coach',
  'Coco',
  "Coconut's Fish Cafe",
  'Coffee & Water Lab',
  'Coffee And More Cafe',
  'CoffeeShop',
  'Coinbase',
  'Coinbase Pro',
  'Columbia',
  'Comcast',
  'Commis',
  'Conoco Gas',
  'Costco',
  'Cotopaxi',
  'Cousins Maine Lobster',
  'Cracked & Battered',
  'Craftsman and Wolves',
  'Crate & Barrel',
  'Crypto.com',
  'Culturall',
  'Cup Cafe',
  'Curb',
  'Curbside Cafe',
  'Curista Coffee',
  'Curry Hyuga',
  'DELL',
  'DIVE.IS',
  'DLR',
  'Da Poke Shack',
  'Daeho Kalbijim & Beef Soup',
  'Daiso',
  'Dandelion',
  "Danny's Kitchen",
  'Dedao',
  'Defi',
  "Denny's",
  'Desolation Hotel Hope Valley',
  'Dictionary.com',
  'Din Tai Fung',
  'Ding Tea',
  'Discover',
  'Disney',
  'Dolores Waterfall',
  'Donfeva',
  'Doordash',
  'Drafts',
  'Dragon Beaux',
  'Duane Reade',
  'Dumpling Depot',
  'Dumpling Home',
  'Dumpling House',
  'Dumpling Story',
  'Dumpling Time',
  'Dumpling Times',
  'Dyson',
  'EA Cafe',
  'EEnovate Technology',
  'EFA',
  'ELSA',
  'ETrade',
  'EWJ',
  'Ea Cafe',
  "Eagle's Lighthouse Cafe",
  'Eat Sushi',
  'Eataly',
  'Ellenos Real Greek Yogurt',
  'Enfamil',
  'Enterprise',
  'Equad Cafe',
  'Esty',
  'Etsy',
  'Eurail',
  'Eva Airways',
  'EverCharge',
  'Eversource',
  'Exploritorium',
  'ExpressVPN',
  'ExxonMobil',
  'FB',
  'FBPay',
  'FN',
  'FRAY I.D',
  'FR_DEV',
  'FR_E_COAST',
  'FR_GROWTH',
  'FR_GROWTH_7',
  'FR_IC_FUND',
  'FR_INN_FUND',
  'FR_INT_FUND',
  'FUTU',
  'Fable Kitchen',
  'Facebook',
  'Factor 75',
  'Family Mart',
  "Farley's Coffeehouse",
  'Farm House Local',
  'Fastrak',
  'Fedex',
  'Feltman Brothers',
  'Feng Cha',
  'Feng Cha Teahouse',
  'Fidelity',
  'Filoli',
  'Flashrouter',
  'Flywheel Coffee Roasters',
  'Fog Harbor Fish House',
  'Forever 21',
  'Four Barrel',
  'Four Chairs',
  'Four Seasons',
  'Frascati',
  'Free Now',
  'Fresh Spot',
  'Fugetsu',
  'GINTO Express',
  'GOHAN',
  'GOL',
  'GOOG',
  'GRMN',
  'Gai Chicken & Rice',
  'Ganji',
  'Garden Creamery',
  'Geico',
  'Gentilly',
  "Gilberth's Latin Fusion",
  'Ginto Express',
  'Github',
  'Glacier Express',
  'Glossika',
  'GoFundMe',
  'Gochi',
  'Godiva',
  'Golden State Warriors',
  'Gong Cha',
  'GoodLife Cafe',
  'Google',
  "Gott's Roadside",
  'Gram Cafe',
  'Grammarly',
  'Gravenstein Grill',
  'Grovemade',
  'Grubhub',
  'Guide To Iceland',
  "Gus's Community Market",
  'H Mart',
  'H&M',
  'HARD KNOX',
  'Haagen Dazs',
  'Hakashi Japanese Sushi Bar',
  'Hakka Cuisine',
  'Hakone Gardens',
  'Halo Pub',
  'Hamakua Macadamia Nut',
  'Hamama',
  'Hanna Andersson',
  'Happy Cow Creamery & Tea',
  'Happy Lemon',
  'Harvard',
  'Harvard Law School',
  'Harvard Law School Dining',
  'Hawaiian Airlines',
  'Hele Kihei Azeka',
  'Heptabase',
  'Hertz',
  'Hidden Spot',
  'Himalaya',
  'Hina Yakitori',
  'Hinerava',
  'Hinodeya Ramen',
  'Hippo',
  'Hog Island',
  'Holualoa Inn',
  'Home Coffee Roasters',
  'Home Slice Take N Bake',
  'Honeybear Boba',
  'Honk Mobile',
  'Hoshinoya',
  'Hot Wok Cafe',
  'Hotel Sacher Salzburg',
  'Hotel Schweizerhof Luzern',
  'Hotwire',
  'Hu Tong Jian Bing',
  'Huangcheng Noodle House',
  'Hulu',
  'Humphry Slocombe',
  'Hyatt',
  "I'Milky 沐白",
  "I'a Poke",
  'I-Tea',
  'IBM',
  'IEF',
  'IHG',
  'IZRL',
  'Ice Monster',
  'Icelandair',
  'Ichika Sushi House',
  "Ike's",
  'Ikea',
  'Ikon Coffee',
  'Il Canto Cafe',
  'In-N-Out Burger',
  'Initium Media',
  'Intuit',
  'Iyasare',
  'Izumi Revolving Sushi',
  'Jam Cafe',
  'Jane On Fillmore',
  'Jane on Larkin',
  'Janie and Jack',
  'Japadog',
  'Japanese Tea Garden',
  'Jeda',
  'Jell & Chill',
  'Jellycat',
  'Jetblue',
  'Jiangnan Cuisine',
  'JjamPpong',
  'Joe & The Juice',
  'Ju-Ni',
  'Juarez Tires and Brakes',
  'KFC',
  'KMB',
  'KOA',
  'KWEB',
  "Kaaloa's Super J's",
  'Kaikagetsu NYC',
  'Kaisen Sushi',
  'Kaizen & Coffee',
  'Kajiken',
  'Kaju Tofu House',
  'Kakiyuki',
  'Katsu-Hama',
  'Katsu-ya',
  'Kazan',
  'Kikumo',
  'Kin Khao',
  'Kingyo',
  'Kiraku',
  'Kiroro Sushi',
  'Kiva',
  'Koja Kitchen',
  'Korean Bobcha',
  'Kossof Beauty',
  'Kraken',
  'Kronan supermakret',
  'Kualoa Ranch',
  'Kukje Market',
  'Kung Fu Tea',
  'Kytin',
  "L'Ardoise Bistro",
  'L.A. Burdick Chocolates',
  'LATAM',
  'LEGO',
  'LYFT',
  'La Boulangerie de San Francisco',
  'La Grande Boucherie',
  'La Note',
  'Labcorp',
  'Laduree',
  'Lady M',
  'Lamp plus',
  'Lancome',
  'Lawson',
  'Lazy Bear',
  'Le Bernardin',
  'Le Bernedin',
  'Learn American English Podcast',
  'Ledger',
  'Leetcode',
  'Legal Sea Foods',
  "Liang's Village",
  'Life Cycle',
  'Lindt Chocolate',
  'Linea Caffe',
  'LingQ',
  'Lingvist',
  'LinkedIn',
  'Little Shanghai',
  'Liuyishou Hotpot',
  'Logitech',
  'Lollipot',
  'Long Bridge Pizza',
  'Louis Vuitton',
  'Love My Buns',
  'Luma Hotel Coffee',
  'Lyft',
  'M1',
  'MOMO noodle',
  'MORI',
  'MOS Burger',
  'MRVL',
  'MSFT',
  'MU',
  'Macy',
  'Mademoiselle Colette',
  'Magic Beans',
  'Magic Donuts',
  'Mainstay Market',
  'Mainstay Markets',
  "Mama Chen's Kitchen",
  'Mana Foods',
  "Manora's Thai Cuisine",
  'Mansur Gavriel',
  "Marcella's Lasagneria",
  'Marigold',
  'Mariposa Project',
  'Marriott',
  'Marufuku Ramen',
  'Marugame Udon',
  'Maruwu Seicha',
  'Masa Sushi',
  'MasterClass',
  'Matcha Cafe Maiko',
  'Math Tutor DVD',
  'Maui Gelato and Waffles',
  'Mazarine Coffee',
  "McDonald's",
  'Meal Pal',
  'Mediterranean Aroma',
  'Meet Fresh',
  'Mendocino Grove',
  'Mendocino Jams & Preserves',
  'Metro North',
  'Mezli',
  'Microsoft',
  'Mikimoto',
  'Miku',
  'Mila Owen',
  'Miller & Lux',
  'Mint Mobile',
  'Miracle Brand',
  'Mirchi Indian Kitchen',
  'Mission Rock Resort',
  'Misty Valley Inn',
  'Mitsui Shopping Park',
  'Mitsuwa',
  'Mix Traditions',
  "Mo 'Ono Hawaii Acai Bowls",
  'Mochill Mochi donut',
  'Molokini Crater and South Maui Coast Adventure from Kihei',
  'Moom',
  'Moosejaw',
  'Morgan Stanley',
  'Mori',
  'Moshi Moshi',
  'Movenpick',
  'Mr Szechuan',
  'Mr. East Kitchen',
  'Mr. Green Bubble',
  "Muracci's Japanese Curry & Grill",
  'Musubii Cafe IYASUME',
  'My Saving Direct',
  'N7 DRAFT TEA + COFFEE',
  'NET',
  'NET FASION',
  'NJ Transit',
  'NOK',
  'NTAP',
  'NVDA',
  'NYC MTA',
  'NYSE_H',
  'NYSE_T',
  'NYTimes',
  "Nalu's South Shore Grill",
  'Nanit',
  'Natera',
  'Nature box',
  'Nautilus',
  'Neighbor Bakehouse',
  'Neiman Marcus',
  'Nero Belgian Waffle Bar',
  'Nest Design',
  'Netflix',
  'Nijiya Market',
  'Nike',
  'Nintendo',
  'Nob Hill',
  'Noe Coffee',
  'Noodle House',
  'Nordstorm',
  'O2 Valley',
  'OCGCX',
  'OGS',
  'ONE65',
  'ORCL',
  'OSHA Thai Express',
  'OXY',
  'OZK',
  'Ocean Dry Cleaning',
  'Ocha',
  'Office Max',
  'OfficeMax',
  'Ohelo Cafe',
  'One 65',
  'OneMedical',
  'Onigilly',
  'Onyx Boox',
  'OpenAI',
  "Oren's Hummus",
  'Outdoor Research',
  'Outset Coffee',
  'PASMO',
  'PChome',
  'PG',
  'PG&E',
  'PLAUD',
  'PLD',
  'PLTR',
  'PSTG',
  'Pacific Catch',
  'Pacific Gynecology OB',
  'Pacific OB',
  'Pacific Ob-Gyn',
  'Padrecito',
  'Paia Fish Market Restaurant',
  'Palisades',
  'Panera Bread',
  'Pangaea Grill',
  'Papito',
  'Paris Baguette',
  'ParkSFO',
  'Passionfish',
  'PayByPhone',
  'Paypal',
  'Pehr',
  'Philz Coffee',
  'Piccino',
  'Piccino Cafe',
  'Pierre Marcolini',
  'Pineapple King Bakery',
  'Pinhole Coffee',
  'Pinkberry',
  'Piroshky Piroshky',
  'Plain Jane',
  'Plastiq',
  'Plow',
  "Po'Boys Kitchen",
  'Point Cabrillo Lighthouse',
  'Poke Delish',
  'Poke House',
  'Poke Market',
  'Polynesian Cultural Center',
  'Pottery Barn',
  'Pottery Barn Kids',
  'Princeton University Store',
  'Progyny',
  'Proper Food',
  'Proton Mail',
  'Purple Rice',
  'QQQ',
  'Quickly',
  'Quip',
  'R & G Lounge',
  'R&G Lounge',
  'RELL',
  'RH Restaurant',
  'Raku',
  'Rasa Rasa',
  'Readmoo',
  'Red Finger',
  'Redwood Bistro',
  'Rhong-Tiam Thai Cuisine',
  "Rhythm 'n Wraps",
  'Rimowa',
  'Rise & Grind Coffee and Tea',
  'Robinhood',
  'Rocket Fuel',
  "Romolo's Cannoli",
  "Rong's",
  'Room & Board',
  'Rooster and Rice',
  'Royce',
  'SF Kebab',
  'SF76',
  'SFMTA',
  'SFO Parking',
  'SMH',
  'SOGO',
  'SOMA EATS',
  'SOXL',
  'SPRO Coffee Lab',
  'SPY',
  'STWD',
  'Safeway',
  'Saint Frank Coffee',
  'Saks',
  'Saku',
  'Sakura Express',
  'Salt & Straw',
  'San Ho Won',
  'San Tung',
  'Satura',
  'Sazon Authentic Peruvian Cuisine',
  'Schwab',
  "See's Candies",
  'Seven Hills',
  'Shake Shack',
  'Sharetea',
  'Shell',
  'Sheng Kee Bakery',
  'Shiki',
  'Showa',
  'Sightglass Coffee',
  'Sigona Farmers Market',
  'Singapore Airline',
  'Sixt',
  'Sixth Course',
  'Sixth Course Dessert',
  'Slacker',
  'Sleep Cycle',
  'Small World Coffee',
  'Snidel',
  'Sobakatsu',
  'Sobaya',
  'Sodastream',
  'Soji',
  'Somi Somi',
  "Soonja's Cuisine",
  'Souvla',
  'Soylent',
  'Spice Kit',
  'Spotify',
  'Spring',
  'Spring Fertility',
  'Stagecoach Greens',
  'Stanley H Siu',
  'Staple',
  'Staples',
  'Starbucks',
  'State Farm',
  'Stonemill Matcha',
  'Street Meet Taco',
  'Stuart Weitzman',
  'Subsconsciou',
  'Subway',
  "Sue's Gallery Cafe",
  'Suica',
  'Suisan Company',
  'Sumika Grill',
  'Sunday Social',
  'Sunglass Hut',
  'Sunoco',
  'Sunshine',
  'Super Mira',
  'Sure Dividend',
  'Suruki Supermarket',
  'Sushi Burrito',
  'Sutter Health',
  'Sweet Maple',
  'Sweet Tooth Shave Ice',
  'Sweetgreen',
  'Swensen',
  'Swensens',
  'Swiss International Air Lines',
  'Szechuan cuisine',
  'T-Mobile',
  'T2 Chelsea',
  'TFT',
  'THSR',
  'TJ Maxx',
  'TKK',
  'TP-TEA',
  'TSLA',
  'TSM',
  'Taiwan Porridge',
  'Taiwan Restaurant',
  'Takahachi Bakery',
  'Takashimaya',
  'Taniku Izakaya',
  'Target',
  'Taskrabbit',
  'Tea Era',
  'Teaspoon',
  'Teleferic Barcelona',
  'Telescope Coffee',
  'Telsa',
  'Ten Thousand',
  'Tencent',
  'Tender Curry And Co',
  'Teresa Caffe',
  'Tesla',
  'Texaco',
  'Thai Mee Up',
  'The Boulder Creek Lodge',
  'The Chicken Hawkers',
  'The Coffee Movement',
  'The Confectional',
  'The Gardener',
  'The Hess Collection',
  'The Home Depot',
  'The Mill',
  'The Omni Group',
  'The One Restaurant',
  'The Pink Door',
  'The Rock Inn Mountain Tavern',
  'The Roll',
  'The Sandwich Shop',
  'The Stock Market',
  'Theory',
  'Thinkers Cafe',
  'Thinking Cup',
  'ThongLor Thai',
  'Thrifty',
  'Ticino Restaurant',
  'Tiffany & Co',
  'Tom San Ramen',
  'Tomo Sushi',
  'Tomokazu Japanese Cuisine',
  'Tonchin New York',
  'Tonkatsu Ginza',
  'Top Cashback',
  'Tory Burch',
  'Toyama',
  "Trader Joe's",
  'Tripadvisor',
  'True Food Kitchen',
  'Truedan',
  'TsuruTonTan',
  'UBER',
  'UCSF',
  'UCSF PT',
  'UNIQLO',
  'UPPAbaby',
  'US Customs',
  'USB',
  'USPS',
  'Uber',
  'Uber Eats',
  'Udon Mugizo',
  'Ultra Sushi',
  'Unbound',
  'Uncle Tetsu',
  'Underground Tour',
  'United Airline',
  'United Airlines',
  'United airlines',
  'Uplift',
  'Upper Cut',
  'VFIAX',
  'VMO',
  'VMW',
  'VNM',
  'VNQ',
  'VOO',
  'VRT',
  'VT',
  'VTI',
  'VT_2060A',
  'VWO',
  'VZ',
  'Vanilla Air',
  'Vanity Fair',
  'Vegan Taipei',
  'Verizon',
  'Verve',
  'Vessi',
  "Village Farmer's Market",
  'Vince',
  'Visible',
  'VitalChek',
  'Vive la tarte',
  'Voyager Espresso',
  'W&M Workshop',
  'WBA',
  'WFC',
  'WH42',
  'WHR',
  'Wako',
  'Walgreen',
  'Walgreens',
  'Walmart',
  'Wanpo',
  'Water Street Bistro',
  'Watsons',
  'Wawa',
  'Wayfair',
  'Wayfare Tavern',
  'Waymo',
  'Webster',
  'Weee',
  'Wegmen',
  'West Elm',
  'Whole Foods Market',
  'Wicked Star',
  'Wikipedia',
  'WinCo Foods',
  'Womenizer',
  'WonderInn Arctic x ÖÖD',
  'Wooden Spoon',
  'Woodhouse Fish',
  'Wooly Pig',
  'Woorijip',
  'World Duty',
  'YAYOI',
  'YH Beijing',
  'Yasai Market',
  'Yayoi',
  'Yelp',
  'YesStyle.com',
  'Yifang',
  'Yoji House',
  'Yoku',
  'Young Tea',
  'Yuanbao Jiaozi',
  'Yubico',
  'Yuji',
  'Z & Y Restaurant',
  'ZIGU',
  'ZWILLING',
  'Zappos',
  'Zara',
  'Zazie',
  'aden + anais',
  'b. patisserie',
  'ca.gov',
  'care.com',
  'dlnr.hawaii.gov',
  'eMed',
  'ftb.ca.gov',
  'i Dumpling',
  'i-Tea',
  'iQiyi',
  'iTunes',
  'iTwiwan Foods',
  'il Casaro Pizzeria & Mozzarella Bar',
  'irs.gov',
  'jet.com',
  'jina bakes',
  'ldcloud.net',
  'lightbulbs.com',
  'lululemon',
  'lyft',
  'momo',
  'moonbowls',
  'nebula.tv',
  'noice.cash',
  'nps.gov',
  'pCloud',
  'parks.ca.gov',
  'plantea',
  'project://boba',
  'recreation.gov',
  'sftreasurer.org',
  'shopbop.com',
  'simplehuman',
  'wonderful',
  '三商巧福',
  '中天眼鏡',
  '中油',
  '二吉軒',
  '全家',
  '全民健保',
  '全聯',
  '八和燒肉',
  '八方雲集',
  '八時神仙草',
  '勝利',
  '勝博殿',
  '台北大學醫院',
  '台北醫院',
  '台大醫院',
  '台灣大車隊',
  '史記牛肉麵',
  '吃茶三千',
  '吉豚屋',
  '味鼎',
  '哈肯舖',
  '嘻皮麵包',
  '國安牙醫',
  '大潤發',
  '好記',
  '安永',
  '家樂福',
  '屈臣氏',
  '康是美',
  '微風',
  '德榮軒',
  '德瑋',
  '悠遊卡',
  '愛爾達',
  '新幹線',
  '東區粉圓',
  '水巷茶弄',
  '涓豆腐',
  '為福樓',
  '瓦城',
  '疍宅',
  '白梅',
  '福洱商行',
  '秋吉串燒',
  '粒粒鮮',
  '素素如意',
  '美麗華',
  '義美',
  '茶湯會',
  '華納威秀',
  '蔚稻食堂',
  '誠品',
  '路易莎咖啡',
  '錵鑶',
  '阜杭豆漿',
  '阿城鵝肉',
  '頂好',
  '順成麵包',
  '馬偕醫院',
  '魚心',
  '麥當勞',
  '點心世界',
  '鼎泰豐'
]

export default allPayees
