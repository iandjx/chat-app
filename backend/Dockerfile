FROM golang:alpine
WORKDIR /app

# Download necessary Go modules
COPY go.mod ./
COPY go.sum ./
RUN go mod download
COPY *.go ./

RUN go build -o /build

EXPOSE 8080

CMD [ "/build" ]
# RUN mkdir /app
# ADD . /app/
# WORKDIR /app
# RUN go mod download
# RUN go build -o main ./...
# CMD ["/app/main"]