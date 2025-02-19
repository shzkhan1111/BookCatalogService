namespace AuthenticationLayer.GenericHelperMethod
{
    public class HelperMethods
    {
        public string GenerateStdID()
        {
            return $"STU-{Guid.NewGuid().ToString("N").Substring(0 , 8)}";
        }
        public string GenerateEmployeeNumber()
        {
            return $"EMP-{Guid.NewGuid().ToString("N").Substring(0, 8)}";
        }

        public static string generateUserIdentification(bool isLib)
        {
            string suffix = $"-{Guid.NewGuid().ToString("N").Substring(0, 8)}";
            string prefix = isLib ? "EMP" : "STU";
            return $"{prefix}{suffix}";
        }
    }
}
