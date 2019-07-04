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
      },
      getAccountInfo: function() {
        accountInfoList.push(accountName, balance);
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
