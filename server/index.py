from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from routes.user import user
app = FastAPI()
app.title = 'CREARTAX'
app.version = '0.0.1'

app.include_router(user)


@app.get('/')
def inicio():
    return HTMLResponse('<h1>Bienvenido a CrearTax</h1>')
