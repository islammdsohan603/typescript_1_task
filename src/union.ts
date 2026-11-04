interface Config {
  port?: number;
}

const config: Config = {
  port: 5000,
};

const currentPort: number = config.port!;

console.log(currentPort);
