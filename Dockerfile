FROM debian:9 AS build
WORKDIR /app

COPY cve-2021-4034-poc.c .

RUN apt-get update && apt-get install -y gcc && \
    gcc -o pwnkit cve-2021-4034-poc.c

FROM debian:9

RUN apt-get update && apt-get install -y libpolkit-gobject-1-0=0.105-18+deb9u1 \
    libpolkit-agent-1-0=0.105-18+deb9u1 \
    libpolkit-backend-1-0=0.105-18+deb9u1\
    policykit-1=0.105-18+deb9u1

COPY --from=build /app/pwnkit /bin/

CMD ["sleep","3000"][