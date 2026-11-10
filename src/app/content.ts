export const post = {
  kicker: 'Data Mining',
  kickerNote: 'minor project',
  title: 'What actually moves a house price?',
  standfirst: 'Notes from my Data Mining project',
  deck: 'For my Data Mining minor project I wanted a question anyone could follow without a finance background: why does one house cost more than another? So I took a real housing dataset, cleaned it, and checked which features line up with price. Then I trained a Linear Regression model to predict prices. Everything runs in the terminal. There is no GUI, just a menu you pick options from.',
  repo: 'https://github.com/Tejveercode/House-Price-Analysis',
  author: { name: 'Tejveer', handle: 'Tejveercode', github: 'https://github.com/Tejveercode' },
  stack: 'Python 3.10+',
  readTime: '5 min read',
}

export const glance = [
  { value: '414', label: 'rows in the dataset' },
  { value: '6', label: 'features, plus price' },
  { value: 'New Taipei City', label: 'where the data comes from' },
  { value: '80 / 20', label: 'train and test split' },
]

export const toc = [
  { id: 'data', num: '01', title: 'The data' },
  { id: 'program', num: '02', title: 'How the program works' },
  { id: 'findings', num: '03', title: 'What the data showed' },
  { id: 'model', num: '04', title: 'The prediction model' },
  { id: 'limits', num: '05', title: 'What it can’t tell you' },
  { id: 'run', num: '06', title: 'Run it yourself' },
  { id: 'summing-up', num: '07', title: 'Summing up' },
]

export const sectionIds = toc.map((item) => item.id)

export const features = [
  { label: 'Distance to MRT', value: -0.674 },
  { label: 'Convenience stores', value: 0.571 },
  { label: 'Latitude', value: 0.546 },
  { label: 'Longitude', value: 0.523 },
  { label: 'House age', value: -0.211 },
  { label: 'Transaction date', value: 0.088 },
]

export const priceStats = [
  { label: 'Average', value: '37.98' },
  { label: 'Cheapest', value: '7.60' },
  { label: 'Most expensive', value: '117.50' },
]

export const metrics = [
  { key: 'MAE', value: '5.305', note: 'average miss of about 5.3' },
  { key: 'MSE', value: '53.502', note: 'squared error, hurts more on big misses' },
  { key: 'RMSE', value: '7.315', note: 'typical error in price units' },
  { key: 'R', sup: '2', value: '0.681', note: 'explains 68.1% of price variation' },
]

export const menu = [
  'Load and clean the data',
  'Price statistics',
  'How each feature relates to price',
  'Correlation analysis',
  'Save graphs',
  'Train and evaluate the model',
  'Type in a house, get a predicted price',
  'Run everything in one go',
]

export const commands = [
  {
    label: 'Windows',
    lines: ['python -m venv venv', String.raw`venv\Scripts\activate`, 'pip install -r requirements.txt', 'python main.py'],
  },
  {
    label: 'Linux or macOS',
    lines: ['python3 -m venv venv', 'source venv/bin/activate', 'pip install -r requirements.txt', 'python3 main.py'],
  },
]

export const sources = [
  { title: 'UCI Machine Learning Repository, Real Estate Valuation Data Set', href: 'https://archive.ics.uci.edu/dataset/477/real+estate+valuation' },
  { title: 'Scikit-learn documentation, Linear Models', href: 'https://scikit-learn.org/stable/modules/linear_model.html' },
  { title: 'Pandas documentation', href: 'https://pandas.pydata.org/docs/' },
  { title: 'Matplotlib documentation', href: 'https://matplotlib.org/stable/contents.html' },
]
