Pasos para instalarlo
1ªTener instalado el Node.js , en caso de o tenerlo desde aqui puedes descargarlo  https://nodejs.org/es .
  tambien comprobar que se ha instalando  ejecutando  los siguientes comandos 'node -v' y 'npm -v' desde la terminal (o PowerShell en Windows) 
  para comprobar que este instalando mostrando la version de estas.

2ªInstalar el IDE que se vaya a usar , recomendacion utilizar Visual Studio Code, aqui el link https://code.visualstudio.com/ .
  En VSCode instalar la extension "ES7+ React/Redux/React-Native snippets".

3ªInstalar Git , desde aqui https://git-scm.com/ y luego comprueba que esta instalado con este comando 'git --version' .
  Ahora configuraremos el usuario y correo electrónico con estos comandos:
  -'git config --global user.name "TuNombre"'
  -'git config --global user.email "tucorreo@ejemplo.com"'

4ª Para terminar tendremos que crear una cuenta de Github para subir los repositorios


Pasos para lanzar el proyecto
1ªAbrir la carpeta padre donde se encuentra las carpetas public ,README.md , etc ... .

2ªAbrimos el terminal del IDE ("Recordad que en esta terminal esteis dentro de la carpeta padre, en caso de que no usar 'cd' para meteron en esa carpeta ") y escribmos el siguiente comando 'npm install' , esperas que descargue y pones el siguiente comando 'npm run dev'

3ªListo si no ocurre algun error , se deberia haber encendido y ahora solo queda entrar en el localhost http://localhost:3000



WIKIGAME
Es una pagína tipo wikipedia pero enfocada a los videojuegos , donde vas a poder encontrar mucha informacion sobre estos , desde la historia del juego hasta incluso secretos.Basicamente vamos a tener para cada juego que añadamos una pagina con toda la informacion posible de este juego






 

2
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
