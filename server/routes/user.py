from fastapi import APIRouter
from config.db import conn
from models.user import users
from schemas.user import User

user = APIRouter()


@user.get("/users")
async def read_data():
    return conn.execute(users.select()).fetchall()


@user.get("/users/{id}")
async def read_data(id: int):
    return conn.execute(users.select().where(users.c.id == id)).fetchall()


@user.post("/users/")
async def write_data(user: User):
    conn.execute(users.insert().values(
        name=user.name,
        email=user.email,
        password=user.password,
        telefono=user.telefono
    ))
    return


@user.put("/users/{id}")
async def update_data(id: int, user: User):
    conn.execute(users.update().values(
        name=user.name,
        email=user.email,
        password=user.password,
        telefono=user.telefono
    ).where(users.c.id == id))
    return conn.execute(users.select()).fetchall()


@user.delete("/users/")
async def delete_data(id: int):
    conn.execute(users.delete().where(users.c.id == id))
    return conn.execute(users.select()).fetchall()
