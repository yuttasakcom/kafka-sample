const kafka = require("kafka-node");
const Client = kafka.KafkaClient;
const client = new Client({ kafkaHost: "localhost:2181" });
const topics = [{ topic: "topic1", partition: 0 }];
const options = { autoCommit: false };
const consumer = new kafka.Consumer(client, topics, options);

consumer.on("message", msg => console.log(msg));
