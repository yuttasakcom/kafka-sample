var kafka = require("kafka-node"),
  Producer = kafka.Producer,
  KeyedMessage = kafka.KeyedMessage,
  client = new kafka.KafkaClient({ kafkaHost: "kafka:9092" }),
  producer = new Producer(client),
  km = new KeyedMessage("key", "message"),
  payloads = [
    { topic: "Topic1", messages: "test", partition: 0 },
    { topic: "Topic2", messages: ["hello", "world", km] },
  ];
producer.on("ready", () => {
  console.log("Producer is Ready!");
  producer.send(payloads, (err, data) => {
    if (err) {
      console.log("ready error:", err);
    }
    console.log(data);
  });
});

producer.on("error", err => console.log("on error:", err));
