FROM golang:alpine
RUN mkdir /app 
ADD . /app/ 
WORKDIR /app 
RUN go mod download
RUN go build -v
RUN ls

CMD ["/app/chat-go-react"]

# RUN mkdir /app
# ADD . /app/
# WORKDIR /app
# RUN go mod download
# RUN go build -o main ./...
# CMD ["/app/main"]