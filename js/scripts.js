// Matrix effect for the main page triangle and background
document.addEventListener('DOMContentLoaded', function() {
  // Background Matrix Effect
  const backgroundCanvas = document.getElementById('backgroundMatrixCanvas');
  if (backgroundCanvas) {
    const bgCtx = backgroundCanvas.getContext('2d');
    
    // Set canvas size to match window dimensions
    function resizeBackgroundCanvas() {
      backgroundCanvas.width = window.innerWidth;
      backgroundCanvas.height = window.innerHeight;
    }
    
    resizeBackgroundCanvas();
    window.addEventListener('resize', resizeBackgroundCanvas);
    
    // Matrix characters (using a mix of katakana, numbers, and symbols for the matrix effect)
    const matrixChars = "01";
    
    // Create drops
    const bgFontSize = 16;
    const bgColumns = Math.floor(backgroundCanvas.width / bgFontSize);
    const bgDrops = [];
    
    // Initialize drops at random positions
    for (let i = 0; i < bgColumns; i++) {
      bgDrops[i] = Math.floor(Math.random() * -100);
    }
    
    // Drawing the matrix effect
    function drawBackground() {
      // Semi-transparent black to create fade effect
      bgCtx.fillStyle = "rgba(0, 0, 0, 0.05)";
      bgCtx.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
      
      // Set the character style
      bgCtx.font = bgFontSize + "px monospace";
      
      // Draw characters
      for (let i = 0; i < bgDrops.length; i++) {
        // Random character
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        
        // Varying green colors for matrix effect
        const opacity = Math.random() * 0.5 + 0.3;
        bgCtx.fillStyle = `rgba(10, 90, 255, ${opacity})`;
        
        // Draw the character
        bgCtx.fillText(text, i * bgFontSize, bgDrops[i] * bgFontSize);
        
        // Move drops down
        bgDrops[i]++;
        
        // Reset drops when they reach bottom or randomly
        if (bgDrops[i] * bgFontSize > backgroundCanvas.height && Math.random() > 0.975) {
          bgDrops[i] = 0;
        }
      }
    }
    
    // Animation loop
    setInterval(drawBackground, 50);
  }
  
  const mainTriangle = document.querySelector('.main-triangle');
  if (mainTriangle) {
    const canvas = document.getElementById('matrixCanvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      
      // Set canvas size to match triangle dimensions
      function resizeCanvas() {
        canvas.width = mainTriangle.offsetWidth;
        canvas.height = mainTriangle.offsetHeight;
      }
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      
      // Matrix characters (binary for simplicity)
      const chars = "01";
      
      // Create drops
      const fontSize = 10;
      const columns = Math.floor(canvas.width / fontSize);
      const drops = [];
      
      // Initialize drops at random positions
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height / fontSize) * -1;
      }
      
      // Drawing the matrix effect
      function draw() {
        // Semi-transparent black to create fade effect
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set the character style - green with varying opacity for glass effect
        ctx.font = fontSize + "px monospace";
        
        // Draw characters
        for (let i = 0; i < drops.length; i++) {
          // Random character
          const text = chars[Math.floor(Math.random() * chars.length)];
          
          // Varying green colors for matrix effect while maintaining glass look
          const opacity = Math.random() * 0.5 + 0.3; // Lower opacity for glass effect
          ctx.fillStyle = `rgba(10, 90, 255, ${opacity})`;
          
          // Draw the character
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          
          // Move drops down
          drops[i]++;
          
          // Reset drops when they reach bottom or randomly
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
        }
      }
      
      // Animation loop
      setInterval(draw, 50);
    }
  }
  
  // Animate neural network on AI page
  const neuralNetwork = document.querySelector('.neural-network-animation');
  if (neuralNetwork) {
    const inputLayer = document.querySelector('.input-layer');
    const hiddenLayer = document.querySelector('.hidden-layer');
    const outputLayer = document.querySelector('.output-layer');
    
    if (inputLayer && hiddenLayer && outputLayer) {
      // Create connections between nodes
      const inputNodes = inputLayer.querySelectorAll('.node');
      const hiddenNodes = hiddenLayer.querySelectorAll('.node');
      const outputNodes = outputLayer.querySelectorAll('.node');
      
      // Function to create SVG connection lines
      function createConnections() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('class', 'connections');
        svg.style.position = 'absolute';
        svg.style.top = '0';
        svg.style.left = '0';
        svg.style.width = '100%';
        svg.style.height = '100%';
        svg.style.zIndex = '-1';
        
        // Connect input to hidden layer
        inputNodes.forEach(inputNode => {
          const inputRect = inputNode.getBoundingClientRect();
          const inputX = inputRect.left + inputRect.width/2 - neuralNetwork.getBoundingClientRect().left;
          const inputY = inputRect.top + inputRect.height/2 - neuralNetwork.getBoundingClientRect().top;
          
          hiddenNodes.forEach(hiddenNode => {
            const hiddenRect = hiddenNode.getBoundingClientRect();
            const hiddenX = hiddenRect.left + hiddenRect.width/2 - neuralNetwork.getBoundingClientRect().left;
            const hiddenY = hiddenRect.top + hiddenRect.height/2 - neuralNetwork.getBoundingClientRect().top;
            
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute('x1', inputX);
            line.setAttribute('y1', inputY);
            line.setAttribute('x2', hiddenX);
            line.setAttribute('y2', hiddenY);
            line.setAttribute('stroke', 'rgba(0, 102, 204, 0.3)');
            line.setAttribute('stroke-width', '1');
            
            svg.appendChild(line);
          });
        });
        
        // Connect hidden to output layer
        hiddenNodes.forEach(hiddenNode => {
          const hiddenRect = hiddenNode.getBoundingClientRect();
          const hiddenX = hiddenRect.left + hiddenRect.width/2 - neuralNetwork.getBoundingClientRect().left;
          const hiddenY = hiddenRect.top + hiddenRect.height/2 - neuralNetwork.getBoundingClientRect().top;
          
          outputNodes.forEach(outputNode => {
            const outputRect = outputNode.getBoundingClientRect();
            const outputX = outputRect.left + outputRect.width/2 - neuralNetwork.getBoundingClientRect().left;
            const outputY = outputRect.top + outputRect.height/2 - neuralNetwork.getBoundingClientRect().top;
            
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute('x1', hiddenX);
            line.setAttribute('y1', hiddenY);
            line.setAttribute('x2', outputX);
            line.setAttribute('y2', outputY);
            line.setAttribute('stroke', 'rgba(0, 102, 204, 0.3)');
            line.setAttribute('stroke-width', '1');
            
            svg.appendChild(line);
          });
        });
        
        neuralNetwork.appendChild(svg);
      }
      
      // Wait for elements to be properly positioned
      setTimeout(createConnections, 500);
      
      // Update connections on window resize
      window.addEventListener('resize', function() {
        const oldSvg = document.querySelector('.connections');
        if (oldSvg) {
          oldSvg.remove();
        }
        setTimeout(createConnections, 500);
      });
    }
  }
  
  // Animate QA process steps
  const qaProcess = document.querySelector('.qa-process');
  if (qaProcess) {
    const steps = qaProcess.querySelectorAll('.process-step');
    
    function animateSteps() {
      steps.forEach((step, index) => {
        setTimeout(() => {
          step.querySelector('.step-icon').style.backgroundColor = '#00cc66';
          if (step.querySelector('.step-line')) {
            step.querySelector('.step-line').style.backgroundColor = '#00cc66';
          }
        }, index * 500);
      });
      
      setTimeout(() => {
        steps.forEach((step, index) => {
          setTimeout(() => {
            step.querySelector('.step-icon').style.backgroundColor = '#aaa';
            if (step.querySelector('.step-line')) {
              step.querySelector('.step-line').style.backgroundColor = '#aaa';
            }
          }, index * 500);
        });
      }, steps.length * 500 + 1000);
    }
    
    // Run animation initially and then every 5 seconds
    animateSteps();
    setInterval(animateSteps, steps.length * 1000 + 2000);
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add active class to nav items based on current page
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.parentElement.classList.add('active');
    }
  });
  
  // Initialize logo matrix effect
  const logoMatrix = document.querySelector('.logo-matrix');
  if (logoMatrix) {
    // Add small binary digits to the logo matrix
    const digits = ['0', '1'];
    const digitCount = 10;
    
    for (let i = 0; i < digitCount; i++) {
      const digit = document.createElement('span');
      digit.textContent = digits[Math.floor(Math.random() * digits.length)];
      digit.style.position = 'absolute';
      digit.style.color = 'rgba(0, 102, 204, 0.7)';
      digit.style.fontSize = '8px';
      digit.style.left = `${Math.random() * 100}%`;
      digit.style.top = `${Math.random() * 100}%`;
      digit.style.animation = `fade-in-out ${Math.random() * 2 + 1}s infinite`;
      
      logoMatrix.appendChild(digit);
    }
    
    // Add keyframes for fade-in-out animation
    if (!document.querySelector('#matrix-animation-style')) {
      const style = document.createElement('style');
      style.id = 'matrix-animation-style';
      style.textContent = `
        @keyframes fade-in-out {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }
  }
});
