import React, { useState } from 'react';
import { User, Calculator, LogOut, Lock } from 'lucide-react';

interface UserAccount {
  username: string;
  role: string;
  name: string;
}

const userAccounts: UserAccount[] = [
  { username: 'ma', role: 'Product Owner', name: 'M.A' },
  { username: 'fm', role: 'Engineering Lead', name: 'F.M' },
  { username: 'qa', role: 'QA Engineer', name: 'R.M' },
  { username: 'td', role: 'Software Engineer', name: 'T.D' },
  { username: 'ae', role: 'Software Architect', name: 'A.E' },
  { username: 'power', role: 'Power User', name: 'Einstein' }
];

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)',
    fontFamily: 'Arial, sans-serif'
  },
  loginContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
  loginCard: {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    padding: '40px',
    width: '100%',
    maxWidth: '400px'
  },
  loginHeader: {
    textAlign: 'center' as const,
    marginBottom: '32px'
  },
  iconContainer: {
    width: '64px',
    height: '64px',
    background: '#dbeafe',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px'
  },
  subtitle: {
    backgroundColor: '#FFB000',
    color: '#1E3A8A',
    padding: '16px 24px',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center' as const,
    margin: '20px auto',
    maxWidth: '180px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  companyLogo: {
    maxWidth: '200px',
    height: 'auto',
    margin: '0 auto',
    display: 'block'
  },
  inputGroup: {
    marginBottom: '24px'
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '8px'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box' as const,
    transition: 'border-color 0.2s, box-shadow 0.2s'
  },
  inputFocus: {
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
  },
  inputDisabled: {
    backgroundColor: '#f9fafb',
    cursor: 'not-allowed'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    outline: 'none'
  },
  buttonHover: {
    backgroundColor: '#2563eb'
  },
  buttonDisabled: {
    backgroundColor: '#d1d5db',
    color: '#9ca3af',
    cursor: 'not-allowed'
  },
  error: {
    color: '#dc2626',
    fontSize: '14px',
    backgroundColor: '#fef2f2',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '16px'
  },
  userList: {
    marginTop: '24px',
    fontSize: '14px',
    color: '#6b7280'
  },
  userListTitle: {
    fontWeight: '600',
    marginBottom: '8px'
  },
  userItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '4px'
  },
  header: {
    backgroundColor: 'white',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid #e5e7eb'
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginLeft: '12px'
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  userInfo: {
    textAlign: 'right' as const
  },
  userName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#1f2937'
  },
  userRole: {
    fontSize: '12px',
    color: '#6b7280'
  },
  logoutButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px',
    color: '#374151',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.2s'
  },
  logoutButtonHover: {
    backgroundColor: '#f3f4f6'
  },
  main: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '32px 24px'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    padding: '40px'
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '24px'
  },
  alert: {
    backgroundColor: '#fef3c7',
    border: '1px solid #f59e0b',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center'
  },
  alertText: {
    color: '#92400e',
    marginLeft: '8px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px'
  },
  profitField: {
    width: '100%',
    padding: '12px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    backgroundColor: '#f9fafb',
    fontSize: '16px',
    boxSizing: 'border-box' as const
  },
  profitValue: {
    fontSize: '18px',
    fontWeight: '500'
  },
  profitPositive: {
    color: '#059669'
  },
  profitNegative: {
    color: '#dc2626'
  },
  profitPlaceholder: {
    color: '#9ca3af'
  },
  businessRule: {
    marginTop: '32px',
    padding: '16px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px'
  },
  businessRuleTitle: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '8px'
  },
  businessRuleText: {
    fontSize: '14px',
    color: '#6b7280'
  }
};

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginError, setLoginError] = useState('');
  const [income, setIncome] = useState('');
  const [cost, setCost] = useState('');
  const [profit, setProfit] = useState<number | null>(null);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleLogin = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    const user = userAccounts.find(account => account.username === loginUsername);
    
    if (user) {
      setCurrentUser(user);
      setLoginError('');
      setLoginUsername('');
    } else {
      setLoginError('Invalid username. Please try again.');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIncome('');
    setCost('');
    setProfit(null);
  };

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setIncome(value);
    }
  };

  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setCost(value);
    }
  };

  const handleCalculate = () => {
    if (currentUser?.role === 'Power User' && income && cost) {
      const incomeNum = parseFloat(income);
      const costNum = parseFloat(cost);
      const calculatedProfit = incomeNum - costNum;
      setProfit(calculatedProfit);
    }
  };

  const canCalculate = currentUser?.role === 'Power User';

  if (!currentUser) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginCard}>
          <div style={styles.loginHeader}>
            <div style={styles.iconContainer}>
              <User size={32} color="#3b82f6" />
            </div>
            <h1 style={styles.title}>Welcome</h1>
          </div>

          <div style={styles.form}>
            <div style={styles.inputGroup}>
              <label htmlFor="username" style={styles.label}>
                Username
              </label>
              <input
                type="text"
                id="username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                onFocus={() => setFocusedInput('username')}
                onBlur={() => setFocusedInput(null)}
                style={{
                  ...styles.input,
                  ...(focusedInput === 'username' ? styles.inputFocus : {})
                }}
                placeholder="Enter your username"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
              />
            </div>

            {loginError && (
              <div style={styles.error}>
                {loginError}
              </div>
            )}

            <button
              onClick={handleLogin}
              onMouseEnter={() => setHoveredButton('login')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                ...styles.button,
                ...(hoveredButton === 'login' ? styles.buttonHover : {})
              }}
            >
              Sign In
            </button>
          </div>

          <div style={styles.userList}>
            <p style={styles.userListTitle}>Available Users:</p>
            <div>
              {userAccounts.map((account) => (
                <div key={account.username} style={styles.userItem}>
                  <span>{account.name}</span>
                  <span style={{ color: '#9ca3af' }}>({account.username})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerLeft}>
            <Calculator size={32} color="#3b82f6" />
            <h1 style={styles.headerTitle}>Profit Calculator</h1>
          </div>
          <div style={styles.headerRight}>
            <div style={styles.userInfo}>
              <p style={styles.userName}>{currentUser.name}</p>
              <p style={styles.userRole}>{currentUser.role}</p>
            </div>
            <button
              onClick={handleLogout}
              onMouseEnter={() => setHoveredButton('logout')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                ...styles.logoutButton,
                ...(hoveredButton === 'logout' ? styles.logoutButtonHover : {})
              }}
            >
              <LogOut size={16} style={{ marginRight: '4px' }} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Profit Calculator</h2>
          
          {!canCalculate && (
            <div style={styles.alert}>
              <Lock size={20} color="#f59e0b" />
              <p style={styles.alertText}>
                Only Power User can perform profit calculations. Your role ({currentUser.role}) has read-only access.
              </p>
            </div>
          )}

          <div style={styles.form}>
            <div style={styles.inputGroup}>
              <label htmlFor="income" style={styles.label}>
                Income
              </label>
              <input
                type="text"
                id="income"
                value={income}
                onChange={handleIncomeChange}
                onFocus={() => setFocusedInput('income')}
                onBlur={() => setFocusedInput(null)}
                disabled={!canCalculate}
                style={{
                  ...styles.input,
                  ...(focusedInput === 'income' ? styles.inputFocus : {}),
                  ...(!canCalculate ? styles.inputDisabled : {})
                }}
                placeholder="Enter income amount"
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="cost" style={styles.label}>
                Cost
              </label>
              <input
                type="text"
                id="cost"
                value={cost}
                onChange={handleCostChange}
                onFocus={() => setFocusedInput('cost')}
                onBlur={() => setFocusedInput(null)}
                disabled={!canCalculate}
                style={{
                  ...styles.input,
                  ...(focusedInput === 'cost' ? styles.inputFocus : {}),
                  ...(!canCalculate ? styles.inputDisabled : {})
                }}
                placeholder="Enter cost amount"
              />
            </div>

            <button
              onClick={handleCalculate}
              onMouseEnter={() => setHoveredButton('calculate')}
              onMouseLeave={() => setHoveredButton(null)}
              disabled={!canCalculate || !income || !cost}
              style={{
                ...styles.button,
                ...(canCalculate && income && cost && hoveredButton === 'calculate' ? styles.buttonHover : {}),
                ...(!canCalculate || !income || !cost ? styles.buttonDisabled : {})
              }}
            >
              Calculate
            </button>

            <div style={styles.inputGroup}>
              <label htmlFor="profit" style={styles.label}>
                Profit
              </label>
              <div style={styles.profitField}>
                <span style={{
                  ...styles.profitValue,
                  ...(profit !== null 
                    ? profit >= 0 
                      ? styles.profitPositive
                      : styles.profitNegative
                    : styles.profitPlaceholder)
                }}>
                  {profit !== null ? `  €${profit.toFixed(2)}` : 'Profit will appear here'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;