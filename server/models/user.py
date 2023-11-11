from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine

users = Table(
    'userClient', meta,
    Column('id', Integer, primary_key=True),
    Column('name', String(250)),
    Column('email', String(250)),
    Column('contraseña', String(250)),
    Column('telefono', String(250))
)

meta.create_all(engine)
