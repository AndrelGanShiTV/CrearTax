from sqlalchemy import create_engine, MetaData

engine = create_engine(
    "mysql+pymysql://root:password@localhost:3306/creartax2")
meta = MetaData()
conn = engine.connect()
