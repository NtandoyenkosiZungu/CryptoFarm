# Set Instructions

- follow the steps below to set up and run the project

## Requirements
-- Node.js v20+
-- Tailwindcss
-- react.js

## Installation
- <pre>```bash 
- git clone https://github.com/NtandoyenkosiZungu/CryptoFarm
- cd cryptofarm
- npm install
- npm install tailwindcss @tailwindcss/vite
</pre>

## Before running the Project

- head to ``` main.jsx``` , and insect @import "tailwindcss";
- head to vite.config.js and the code there  will be looking like 
<pre>```bash
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' <- insect this line

export default defineConfig({
  plugins: [
    tailwindcss(), <- and this line
  ],
})
</pre>

## Now running the Project

```bash #npm run dev```
