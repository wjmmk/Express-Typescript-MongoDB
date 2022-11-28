import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
    const files = fileName.split('.').shift();
    return files;
}

// Read files from a directory.
readdirSync(PATH_ROUTER).filter((fileName)=> {
    const cleanName = cleanFileName(fileName);
    if(cleanName !== 'index'){
        // Read files from directory
        import(`./${cleanName}`).then((routerGeneral) => {
            router.use(`/${cleanName}`, routerGeneral.router);
            console.log(`Se esta cargando la Ruta: /${cleanName}`)
        })

    }
})

export { router };