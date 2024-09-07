FROM python:3.13.0rc1-slim
LABEL Author="yuki.nagae1130@gmail.com"

ENV TZ Asia/Tokyo

RUN mkdir /work
WORKDIR /work

RUN apt-get update && apt-get -y upgrade && apt-get install -y build-essential

ADD requirements.txt .
RUN pip install --upgrade setuptools && pip install -r requirements.txt

ADD . .

CMD [ "python", "main.py" ]