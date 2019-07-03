function createAccount() {
  var accountInfoList = [];

  var account = (function() {
    var accountName;
    var deposit = 0.0;
    var balance = 0.0;
    function setBalance() {
      balance += parseFloat(deposit);
    }
    return {
      setValues: function(acctName, dep) {
        accountName = acctName;
        deposit = dep;
        setBalance();
        // balance += parseFloat(deposit);
      },
      getAccountName: function() {
        return accountName;
      },
      getBalance: function() {
        return balance;
      },
      getAccountInfo: function() {
        accountInfoList.push(this.getAccountName(), this.getBalance());
        return accountInfoList;
      }
    };
  })();

  var accountName = document.getElementById("account-name").value;
  var deposit = document.getElementById("deposit").value;

  account.setValues(accountName, deposit);

  var txtAccountInfo = document.getElementById("account-info");
  txtAccountInfo.innerHTML +=
    txtAccountInfo.innerHTML !== ""
      ? "\n" + account.getAccountInfo()
      : account.getAccountInfo();
}
