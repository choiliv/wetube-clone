import express from "express";

const PORT = 4000;

const app = express();

const urlLogger = (req, res, next) => {
  console.log("Path:",req.path);
  next();
}

const timeLogger = (req, res, next) => {
  
  const date = new Date();
  console.log(`Time: ${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`);
  next();
}

const securityLogger = (req, res, next) => {
  if(req.protocol === "https") {
    console.log("Secure");
  
  } else {
 
    console.log("Insecure");
  }
    
    next();
}

const protectorMiddleware = (req, res, next) => {
  if (req.path === "/protected") {
    return res.send("<h1>Not allowed<h1>");
  } 
  next();
}

const handleHome = (req, res) => {
    return res.send("<h1>Home</h1>");
  };
  
  const handleAbout = (req, res) => {
    return res.send("<h1>About</h1>");
  };
  
  const handleContact = (req, res) => {
    return res.send("<h1>Contact</h1>");
  };
  
  const handleLogin = (req, res) => {
    return res.send("<h1>Login</h1>");
  };

  const handleProtected = (req, res) => {
    return res.send("<h1>welcom to protected lounge!</h1>")
  }
  
  app.use(urlLogger);
  app.use(timeLogger);
  app.use(securityLogger);
  app.use(protectorMiddleware);
  app.get("/", handleHome);
  app.get("/about", handleAbout);
  app.get("/contact", handleContact);
  app.get("/login", handleLogin);
  app.get("/protected", handleProtected);

const handleListening = () => console.log(`🍒 Server listeing on port http://localhost:${PORT} 🍑`);

app.listen(PORT, handleListening);
