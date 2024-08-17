const { spawnSync } = require('child_process')
  const { existsSync, writeFileSync } = require('fs')
  
  const SESSION_ID = '16_8_324a_c1c7_e8b9'
  
  if (!existsSync('levanter')) {
    spawnSync('git', ['clone', 'https://github.com/lyfe00011/whatsapp-bot-md.git', 'levanter'], {
      stdio: 'inherit',
    })
    const configPath = 'levanter/config.env'
    writeFileSync(configPath, `VPS=true\nSESSION_ID=${SESSION_ID}`)
    spawnSync('yarn', ['install', '--network-concurrency', '3'], { cwd: 'levanter', stdio: 'inherit' })
  }
  try {
    spawnSync('yarn', ['start'], { cwd: 'levanter', stdio: 'inherit' })
  } catch (error) {}