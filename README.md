# Dialogflow Chat Application

A modern web application built with Next.js that integrates Google Dialogflow for natural language processing and chat functionality.

## Features

- Real-time chat interface
- Integration with Google Dialogflow for natural language understanding
- Modern UI with Tailwind CSS
- Server-side rendering with Next.js
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Cloud Platform account with Dialogflow API enabled
- Dialogflow service account credentials

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd hack-front-end
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up your environment variables:
Create a `.env.local` file in the root directory and add your Dialogflow credentials:
```
GOOGLE_APPLICATION_CREDENTIALS=path/to/your/service-account.json
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
hack-front-end/
├── pages/          # Next.js pages and API routes
├── public/         # Static assets
├── styles/         # CSS and styling files
└── service-account.json  # Google Cloud service account credentials
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - JavaScript library for user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Dialogflow](https://dialogflow.cloud.google.com/) - Natural language processing platform
- [ESLint](https://eslint.org/) - Code linting utility

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.