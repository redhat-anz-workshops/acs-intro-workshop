FROM debian:9
WORKDIR /app

RUN rm /etc/apt/sources.list && \
    echo "deb http://archive.debian.org/debian-security stretch/updates main" >> /etc/apt/sources.list.d/stretch.list && \
    echo "deb http://archive.debian.org/debian stretch main" >> /etc/apt/sources.list.d/stretch.list

COPY cve-2021-4034-poc.c .

RUN apt-get update && apt-get install -y build-essential && \
    gcc cve-2021-4034-poc.c -o cve-2021-4034-poc

RUN apt-get update && apt-get install -y libpolkit-gobject-1-0=0.105-18+deb9u1 \
    libpolkit-agent-1-0=0.105-18+deb9u1 \
    libpolkit-backend-1-0=0.105-18+deb9u1\
    policykit-1=0.105-18+deb9u1 

RUN chgrp -R 0 /app && \
    chmod -R g=u /app 

RUN chmod 0755 /app/cve-2021-4034-poc

USER 1001
CMD ["sleep","3000"]
